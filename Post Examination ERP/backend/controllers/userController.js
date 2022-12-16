const User = require("../models/userModel");
const ErrorHandler = require("../utils/errorHandler");
const catchAsyncErrors = require("../middleware/catchAsyncErrors");

// Register a User
exports.registerUser = catchAsyncErrors(async (req, res, next) => {
  const {email, password_hash,university_id} = req.body;
  const user = User.create({
    email,
    password_hash,
    university_id
  });
  res.status(201).json({
    success:true,
    user
  })
});
// Login user
exports.loginUser = catchAsyncErrors(async (req, res, next) => {
  const {email, password_hash} = req.body;
  const user = User.find({
    'email':email
  });
  if(user.password_hash===password_hash){
  res.status(201).json({
    success:true,
    user
  })
}
else{
  res.status(501).json({
    success:false,
    user
  })
}
});
