const User = require("../models/userModel");
const ErrorHandler = require("../utils/errorHandler");
const catchAsyncErrors = require("../middleware/catchAsyncErrors");

// Register a User
exports.registerUser = catchAsyncErrors(async (req, res, next) => {
  const { name, email, password } = req.body;
  const user = User.create({
    name,
    email,
    password,
    avatar: {    
      public_id: "sample public_id",
      url: "sample url",
    },
  });
  res.status(201).json({
    success:true,
    user
  })
});
