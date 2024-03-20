import bcrypt from "bcrypt";
import updateUser from "../../models/users/updateUser.js";
import Joi from "joi";
import { joiPasswordExtendCore } from "joi-password";
import generateError from "../../utils/generateError.js";

const profile = async (req, res, next) => {
  try {
    const { id } = req.user; // Obtiene el ID del usuario del token
    const { name, password, biography } = req.body;
    //const { avatarURL } = req.files;

    // pendiente de ver si necesita JOI
    const joiPassword = Joi.extend(joiPasswordExtendCore);
    const schema = Joi.object().keys({
      name: Joi.string().min(1).max(24),
      password: joiPassword
        .string()
        .optional()
        .min(8)
        .minOfUppercase(1)
        .minOfSpecialCharacters(1),
      biography: Joi.string().min(5),
    });

    const validation = schema.validate(req.body);

    if (validation.error) {
      generateError(validation.error.message);
    }

    const userDataToUpdate = {};

    if (name) {
      userDataToUpdate.name = name;
    }

    if (password) {
      const hashedPassword = await bcrypt.hash(password, 10);
      userDataToUpdate.password = hashedPassword;
    }

    if (biography) {
      userDataToUpdate.biography = biography;
    }

    if (req.files?.avatar) {
      const file = req.files.avatar;

      const finalFileName = Date.now() + "-" + file.name;
      file.mv(`./uploads/${finalFileName}`);
      userDataToUpdate.avatarURL = finalFileName;


    }
    await updateUser({ id, ...userDataToUpdate });

    if (!updateUser) {
      return res.status(500).json({
        message: "Error al actualizar los datos del usuario",
        error: updateUser.error,
      });
    }

    return res.status(200).json({
      message: "Datos de usuario actualizados correctamente",
      data: { id, ...userDataToUpdate },
    });
  } catch (error) {
    next(error);
  }
};

export default profile;
