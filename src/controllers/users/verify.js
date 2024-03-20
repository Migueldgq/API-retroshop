import Joi from "joi";
import generateError from "../../utils/generateError.js";
import {
  getUserByVerificationCode,
  updateVerificationStatus,
} from "../../models/users/index.js";
const verify = async (req, res, next) => {
  try {
    const { email, verificationCode } = req.body;
    const schema = Joi.object().keys({
      email: Joi.string().email().required(),
      verificationCode: Joi.string().required(),
    });
    const validation = schema.validate(req.body);

    if (validation.error) {
      generateError(validation.error.message);
    }

    const user = await getUserByVerificationCode(email, verificationCode);
    if (user && user.verificationCode === verificationCode) {
      await updateVerificationStatus(email);

      res.status(200).send({
        message: "Verificación exitosa. Ahora puedes iniciar sesión.",
      });
    } else {
      generateError("Código de verificación incorrecto.", 400);
    }
  } catch (error) {
    next(error);
  }
};
export default verify;
