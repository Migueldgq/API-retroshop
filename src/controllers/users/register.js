import bcrypt from "bcrypt";
import { v4 as uuidv4 } from "uuid";
import { generateError, sendVerificationMail } from "../../utils/index.js";
import {selectUserByEmail, insertUser} from "../../models/users/index.js"
import Joi from "joi";
import { joiPasswordExtendCore } from "joi-password";

const register = async (req, res, next) => {
  try {
    const { name, email, password } = req.body;

    const userWithSameEmail = await selectUserByEmail(email);
    
// JOI
    const joiPassword = Joi.extend(joiPasswordExtendCore);
    const schema = Joi.object().keys({
      name: Joi.string().min(3).max(50).required().messages({'string.min':'El nombre debe tener minimo 10 caracteres','string.max':'El nombre debe tener máximo 50 caracteres','any.required':'El nombre es obligatorio'}),
      email: Joi.string().email().required().messages({}),
      password: joiPassword.string().min(8).minOfUppercase(1).minOfSpecialCharacters(1).required().messages({'password.min':'La contraseña debe tener como mínimo 8 caracteres','password.minOfUpperCase':'La contraseña debe tener como mínimo 1 mayúscula','password.minOfSpecialCharacters':'La contraseña debe tener como mínimo 1 caracter especial','any.required':'La contraseña es obligatoria'})
    });
    
    const validation = schema.validate(req.body);

    if (validation.error){
      generateError(validation.error.message, 400);
    };

    if (userWithSameEmail) {
      generateError("Ya existe un usuario con este email",400);
    }

    const verificationCode = uuidv4();
    const hashedPassword = await bcrypt.hash(password, 10);

    const insertId = await insertUser({
      name,
      email,
      hashedPassword, // Usar hashedPassword en lugar de password
      verificationCode,
    });

    await sendVerificationMail(email, verificationCode);

    res.status(201).send({
      message:
        "Registro completado con éxito. Te hemos enviado un correo para que verifiques tu registro",
      data: { id: insertId, nombre: name, email },
    });
  } catch (error) {
    next(error);
  }
};

export default register ;
