import Joi from "joi";
import  {REGEX}  from "../utils/constants.js";

const schema = Joi.object({
  fullName: Joi.string()
    .min(4)
    .max(32)
    .pattern(REGEX.FULL_NAME)
    .required()
    .messages({
      "string.min": "Invalid full name entered",
      "string.max": "Invalid full name entered",
      "string.empty": "name is empty",
      "string.pattern.base": "Invalid full name entered",
    }),
  email: Joi.string()
    .max(30)
    .min(6)
    .pattern(new RegExp(REGEX.EMAIL))
    .required()
    .messages({
      "string.min": "Email can not be less than 6 characters",
      "string.max": "Email can not be more than 30 characters",
      "string.pattern.base": "Invalid Email",
    }),
  password: Joi.string().required(),
  role: Joi.string().valid("user").default("user"),
});

const validate = async (req, res, next) => {
  try {
    const { error } = await schema.validate(req.body);
    if (error) {
      if (error.details && error.details.length && error.details[0].message) {
        return res.status(400).json({ error: error.details[0].message });
      }
      return res.status(400).json({ error: error.message });
    }
    return next();
  } catch (error) {
    if (error.details && error.details.length && error.details[0].message) {
      return res.status(400).json({ error: error.details[0].message });
    }
    return res.status(400).json({ error: error.message });
  }
};

module.exports = validate;
