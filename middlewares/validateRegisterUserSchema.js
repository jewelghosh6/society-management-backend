const userSchema = require("../schemas/userSchema");

const validateUser = (req, res, next) => {
  const { error } = userSchema.validate(req.body, { abortEarly: false });

  if (error) {
    return res.status(400).json({
      message: "Validation failed",
      errors: error.details.map((err) => ({
        field: err.path[0],
        message: err.message,
      })),
    });
  }
  next(); // Pass control to the next middleware or route handler
};

module.exports = validateUser;
