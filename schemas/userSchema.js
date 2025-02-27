const Joi = require("joi");

const userSchema = Joi.object({
  firstName: Joi.string()
    .min(2)
    .max(30)
    .required()
    .messages({
      "string.base": "First name must be a string",
      "string.empty": "First name is required",
      "string.min": "First name must be at least {#limit} characters long",
      "string.max": "First name must be at most {#limit} characters long",
      "any.required": "First name is required",
    }),

  lastName: Joi.string()
    .min(2)
    .max(30)
    .required()
    .messages({
      "string.base": "Last name must be a string",
      "string.empty": "Last name is required",
      "string.min": "Last name must be at least {#limit} characters long",
      "string.max": "Last name must be at most {#limit} characters long",
      "any.required": "Last name is required",
    }),

  email: Joi.string()
    .pattern(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/)
    .required()
    .messages({
      "string.pattern.base": "Invalid email format",
      "string.empty": "Email is required",
      "any.required": "Email is required",
    }),

  password: Joi.string()
    .min(6)
    .required()
    .messages({
      "string.min": "Password must be at least {#limit} characters long",
      "string.empty": "Password is required",
      "any.required": "Password is required",
    }),

  mobileNumber: Joi.string()
    .pattern(/^[6-9]\d{9}$/)
    .optional()
    .allow("")
    .messages({
      "string.pattern.base": "Mobile number must be exactly 10 digits and start with 6-9",
    }),
});

module.exports = userSchema;
