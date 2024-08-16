import Joi from "joi";
import { REGEX } from "../utils/constants.js";

const schema = Joi.object({
  name: Joi.string().messages({
    "string.any": "Please enter madicine name",
  }),
  expiry: Joi.date().messages({
    "data.any": "Please enter expiry data",
  }),
});

const medicineValidator = async (req, res, next) => {
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

module.exports = medicineValidator;
