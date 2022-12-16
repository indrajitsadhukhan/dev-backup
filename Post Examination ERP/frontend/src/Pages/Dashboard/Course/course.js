/*
1. File Name: course.js
2. Purpose: Frontend Course Page
3. Dependency:
4. APi, if any:
5. Author: Indrajit Sadhukhan
6. Creation Date: 20.04.2022
7. Modification Date: 16.05.2022
8. How to test:
9. TODO:
*/
import { React, useEffect, useState } from "react";
import {
  Grid,
  TextField,
  Button,
  Modal,
  Box,
  Menu,
  MenuItem,
  Typography,
  FormGroup,
} from "@mui/material";
import PropTypes from "prop-types";
import { CourseCard } from "../../../Components/Cards/Cards";

// import {getAllCourse} from '../../../services/courseService'

export default function Course() {
  // var data;

  const [courses, setCourses] = useState([]);

  async function getAllCourse() {
    try {
      const response = await fetch("/course");
      var data = await response.json();
      setCourses(await data.courses);
    } catch (err) {
      console.log(err);
    }
  }

  async function createCourse(course) {
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(course),
    };

    try {
      const response = await fetch("/course/new", requestOptions).then(
        (response) => console.log(response)
      );
      getAllCourse();
    } catch (err) {
      console.log(err);
    }
  }

  useEffect(() => {
    getAllCourse();
    console.log(courses);
  }, []);

  const [courseName, setCourseName] = useState("");
  const [courseCode, setCourseCode] = useState("");
  const [courseInstructor, setCourseInstructor] = useState("");

  const [examName, setExamName] = useState("");
  const [courseId, setCourseId] = useState("");
  const [fullMarks, setFullMarks] = useState("");

  const [examId, setExamId] = useState("");
  const [userId, setUserId] = useState("");
  const [obtainedMarks, setObtainedMarks] = useState("");

  const [anchorEl, setAnchorEl] = useState(null);
  const menuOpen = Boolean(anchorEl);
  const handleMenuClick = (event) => setAnchorEl(event.currentTarget);
  const handleMenuClose = () => setAnchorEl(null);

  const [openCourse, setOpenCourse] = useState(false);
  const handleOpenCourse = () => setOpenCourse(true);
  const handleCloseCourse = () => setOpenCourse(false);

  const [openCreateExam, setOpenCreateExam] = useState(false);
  const handleOpenCreateExam = () => setOpenCreateExam(true);
  const handleCloseCreateExam = () => setOpenCreateExam(false);

  const [openUploadMarks, setOpenUploadMarks] = useState(false);
  const handleOpenUploadMarks = () => setOpenUploadMarks(true);
  const handleCloseUploadMarks = () => setOpenUploadMarks(false);

  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    bgcolor: "background.paper",
    border: "2px solid #000",
    boxShadow: 24,
    p: 4,
  };

  return (
    <>
      <Modal
        open={openCourse}
        onClose={handleCloseCourse}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        {/* The modal box for add-course command */}
        <Box sx={style}>
          <Typography
            id="modal-modal-title"
            variant="h6"
            component="h2"
            style={{ marginBottom: "8px" }}
          >
            Course Details
          </Typography>

          <FormGroup style={{ display: "flex", rowGap: "12px" }}>
            <TextField
              id="name"
              label="Name"
              value={courseName}
              variant="outlined"
              onChange={(e) => {
                setCourseName(e.target.value);
              }}
            />
            <TextField
              id="code"
              label="Code"
              value={courseCode}
              variant="outlined"
              onChange={(e) => {
                setCourseCode(e.target.value);
              }}
            />

            <TextField
              id="instructor"
              label="Instructor"
              value={courseInstructor}
              variant="outlined"
              onChange={(e) => {
                setCourseInstructor(e.target.value);
              }}
            />

            <div style={{ display: "flex", justifyContent: "end" }}>
              <Button
                variant="contained"
                onClick={() => {
                  const course = {
                    name: courseName,
                    code: courseCode,
                    instructor: courseInstructor,
                  };
                  // data.push(course);
                  createCourse(course);
                  handleCloseCourse();
                  setCourseName("");
                  setCourseCode("");
                  setCourseInstructor("");
                }}
              >
                Save
              </Button>
            </div>
          </FormGroup>
        </Box>
      </Modal>
      {/* Modal for Create Exam */}
      <Modal
        open={openCreateExam}
        onClose={handleCloseCreateExam}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography
            id="modal-modal-title"
            variant="h6"
            component="h2"
            style={{ marginBottom: "8px" }}
          >
            Exam Details
          </Typography>

          <FormGroup style={{ display: "flex", rowGap: "12px" }}>
            <TextField
              id="name"
              label="Name of Examination"
              value={examName}
              variant="outlined"
              onChange={(e) => {
                setExamName(e.target.value);
              }}
            />
            <TextField
              id="course_id"
              label="Course id"
              value={courseId}
              variant="outlined"
              onChange={(e) => {
                setCourseId(e.target.value);
              }}
            />

            <TextField
              id="full_marks"
              label="Full Marks"
              value={fullMarks}
              variant="outlined"
              onChange={(e) => {
                setFullMarks(e.target.value);
              }}
            />

            <div style={{ display: "flex", justifyContent: "end" }}>
              <Button
                variant="contained"
                onClick={() => {
                  handleCloseCreateExam();
                  setExamName("");
                  setCourseId("");
                  setFullMarks("");
                }}
              >
                Save
              </Button>
            </div>
          </FormGroup>
        </Box>
      </Modal>

      {/* Modal for Upload Marks */}
      <Modal
        open={openUploadMarks}
        onClose={handleCloseUploadMarks}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        {/* The modal box for add-course command */}
        <Box sx={style}>
          <Typography
            id="modal-modal-title"
            variant="h6"
            component="h2"
            style={{ marginBottom: "8px" }}
          >
            Upload Marks
          </Typography>

          <FormGroup style={{ display: "flex", rowGap: "12px" }}>
            <TextField
              id="exam_id"
              label="Exam id"
              value={examId}
              variant="outlined"
              onChange={(e) => {
                setExamId(e.target.value);
              }}
            />
            <TextField
              id="user_id"
              label="User Id"
              value={userId}
              variant="outlined"
              onChange={(e) => {
                setUserId(e.target.value);
              }}
            />

            <TextField
              id="obtained_marks"
              label="Obtained Marks"
              value={obtainedMarks}
              variant="outlined"
              onChange={(e) => {
                setObtainedMarks(e.target.value);
              }}
            />

            <div style={{ display: "flex", justifyContent: "end" }}>
              <Button
                variant="contained"
                onClick={() => {
                  handleCloseUploadMarks();
                  setExamId("");
                  setUserId("");
                  setObtainedMarks("");
                }}
              >
                Save
              </Button>
            </div>
          </FormGroup>
        </Box>
      </Modal>
      {/* Menu Items */}
      <Button
        variant="contained"
        className="edit-button my-5"
        onClick={handleMenuClick}
      >
        Menu
      </Button>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={menuOpen}
        onClose={handleMenuClose}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
      >
        <MenuItem onClick={handleOpenCourse}>Add a Course</MenuItem>
        <MenuItem onClick={handleOpenCreateExam}>Create Exam</MenuItem>
        <MenuItem onClick={handleOpenUploadMarks}>Upload Marks</MenuItem>
      </Menu>

      <Grid container spacing={2}>
        {courses.map((item) => {
          return (
            <Grid item xs={12} sm={6} md={4} key={item.name}>
              <CourseCard {...item} />
            </Grid>
          );
        })}
      </Grid>
    </>
  );
}

Course.propTypes = {
  data: PropTypes.object,
};
