const express = require('express')
const { createCourse,getAllCourse } = require('../controllers/courseController')
const { createProgramme,getAllProgramme } = require('../controllers/programmeController')
const {registerUser,loginUser}=require('../controllers/registerController')
const router=express.Router()

// Course apis

// GET Request to get All courses
router.route("/course").get(getAllCourse)

// POST request to Create a new course
router.route("/course/new").post(createCourse)

// PUT request to update a course, DELETE request to delete a course, GET request to get course details
// router.route("/product/:id").put(updateCourse).delete(deleteCourse).get(getCourseDetails)

// Entry marks

// Create exam

    

// Programme apis

// GET Request to get All programs
router.route("/programme").get(getAllProgramme)

// POST request to Create a new programme
router.route("/programme/new").post(createProgramme)


// User authentication apis

// POST Request to register user
router.route("/register").post(registerUser)

// GET Request to login user
router.route("/login").get(loginUser)


module.exports=router
