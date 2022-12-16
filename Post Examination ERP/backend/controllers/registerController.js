/*
1. File Name: courseController.js
2. Purpose: All functions related to course module
3. Dependency: 
4. APi, if any: 
/course/createcourse
/course/createinstance
/course/link_semester
/course/entrymarks
/exam/createexam
/exam/uploadmarks

5. Author: Indrajit Sadhukhan
6. Creation Date: 16.02.2022
7. Modification Date: 25.03.2022
8. How to test:
9. TODO: uploadmarks
*/

const User = require("../models/userModell");
const ErrorHandler = require("../utils/errorHandler");
const catchAsyncErrors = require("../middleware/catchAsyncErrors");

// Register a user
exports.registerUser = catchAsyncErrors(async (req, res, next) => {
  //   Email validation

  // Password hashing

  // Checks email already exists in db
  const user_exists = await User.find({
    'email': req.body.email,
  }).count();

  if(user_exists>0)
  {
    res.status(203).json({
      success: false,
    });
  }
  else{
  const user = await User.create(req.body);
  res.status(201).json({
    success: true,
    user,
  });
}
});

// Login a user
exports.loginUser = catchAsyncErrors(async (req, res) => {
  const email = req.query.email;
  const password_hash = req.query.password_hash;
  const user = await User.find({
    email: email,
    password_hash: password_hash,
  }).count();

  if (user > 0) {
    res.status(200).json({
      success: true,
    });
  } else {
    res.status(200).json({
      success: false,
    });
  }
});
