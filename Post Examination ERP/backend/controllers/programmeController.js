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

// require('dotenv').config();

// const Pool = require('pg').Pool
// const fs = require('fs')
// const csv = require('fast-csv')
// const format = require('pg-format')
// const express = require('express')
// const app = express()
// const bodyparser = require('body-parser')

// app.use(express.static("./public"))
 
// body-parser middleware use
// app.use(bodyparser.json())
// app.use(bodyparser.urlencoded({
//     extended: true
// }))

// const pool = new Pool({
//   user: process.env.USER,
//   host: process.env.HOST,
//   database: process.env.DATABASE,
//   password: process.env.PASSWORD,
//   port: process.env.PORT,
// })

// 1. POST /course/createcourse

// exports.createCourse = (request, response) => {
    // const { code , name } = request.body
    // console.log(request.body)
    // if(code===null || name===null)
    // {
    //   response.status(403).send({error:'Parameters not correct',data:{}})
    //   return
    // }
  
    // pool.query('insert into course (code,name) values ($1,$2)',[code,name], (error, results) => {
    //   if (error) {
    //     console.log(error.detail)
    //     response.status(403).send({error:error.detail,data:{}})
    //     return
    //   } 
    //   response.status(201).send({status:201,message:'Course Created',data:{}})
    // })

//   }
const Programme = require("../models/programmeModel");
const ErrorHandler = require("../utils/errorHandler");
const catchAsyncErrors = require("../middleware/catchAsyncErrors");

// Create a programme
exports.createProgramme = catchAsyncErrors(async (req, res, next) => {
  const programme = await Programme.create(req.body);
  res.status(201).json({
    success: true,
    programme,
  });
});

// Get all programme
exports.getAllProgramme = catchAsyncErrors(async (req, res) => {
  const programme = await Programme.find()
  res.status(200).json({
    success: true,
    programme
  });
})
