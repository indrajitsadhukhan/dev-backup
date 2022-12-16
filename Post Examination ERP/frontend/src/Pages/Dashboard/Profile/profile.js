/*
1. File Name: profile.js
2. Purpose: Frontend Profile Page
3. Dependency:
4. APi, if any:
5. Author: Indrajit Sadhukhan
6. Creation Date: 20.04.2022
7. Modification Date: 16.05.2022
8. How to test:
9. TODO:
*/

import React, { useState } from 'react';

import {
  Grid,
  TextField,
  Button,
  Modal,
  Box,
  Typography,
  FormGroup,
} from '@mui/material';
// import PropTypes from 'prop-types';
import { ProfileRow, Line } from '../../../Components/UI/ui-components';

const data = {
  name: 'Indrajit Sadhukhan',
  university_id: '510518043',
  contact_no: '9999999999',
  email: '510518043.indrajit@students.iiests.ac.in',
  additional_info: [
    { fieldKey: 'Year of Admission', fieldValue: '2018' },
    { fieldKey: 'Programme enrolled', fieldValue: 'BTech' },
  ],
};

export default function Profile() {
  // Handling Functions for About Section
  const [textName, setTextName] = useState(data.name);
  const [textUniversityId, setTextUniversityId] = useState(data.university_id);

  const [openAbout, setOpenAbout] = useState(false);
  const handleOpenAbout = () => setOpenAbout(true);
  const handleCloseAbout = () => setOpenAbout(false);

  const handleAboutButtonClick = () => {
    if (openAbout === false) handleOpenAbout();
    if (openAbout === true) handleCloseAbout();
  };
  const sendAboutDatabase = () => {
    handleCloseAbout();
    data.name = textName;
    data.university_id = textUniversityId;
  };

  // Handling Functions for Contact Section
  const [textContact, setTextContact] = useState(data.contact_no);
  const [textEmail, setTextEmail] = useState(data.email);

  const [openContact, setOpenContact] = useState(false);
  const handleOpenContact = () => setOpenContact(true);
  const handleCloseContact = () => setOpenContact(false);

  const handleContactButtonClick = () => {
    if (openContact === false) handleOpenContact();
    if (openContact === true) handleCloseContact();
  };

  const sendContactDatabase = () => {
    handleCloseContact();
    data.contact_no = textContact;
    data.email = textEmail;
  };

  const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
  };
  return (
    <>
      {/* Edit About Modal */}
      <Modal
        open={openAbout}
        onClose={handleCloseAbout}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography
            id="modal-modal-title"
            variant="h6"
            component="h2"
            style={{ marginBottom: '8px' }}
          >
            Edit About
          </Typography>

          <FormGroup style={{ display: 'flex', rowGap: '12px' }}>
            <TextField
              id="name"
              label="Name"
              value={textName}
              variant="outlined"
              onChange={(e) => {
                setTextName(e.target.value);
              }}
            />
            <TextField
              id="university_id"
              value={textUniversityId}
              label="University ID"
              variant="outlined"
              onChange={(e) => {
                setTextUniversityId(e.target.value);
              }}
            />
            <div style={{ display: 'flex', justifyContent: 'end' }}>
              <Button variant="contained" onClick={sendAboutDatabase}>
                Save
              </Button>
            </div>
          </FormGroup>
        </Box>
      </Modal>
      {/* Edit Contact Details Modal */}

      <Modal
        open={openContact}
        onClose={handleCloseContact}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography
            id="modal-modal-title"
            variant="h6"
            component="h2"
            style={{ marginBottom: '8px' }}
          >
            Edit Contact
          </Typography>

          <FormGroup style={{ display: 'flex', rowGap: '12px' }}>
            <TextField
              id="contact"
              label="Contact"
              value={textContact}
              variant="outlined"
              onChange={(e) => {
                setTextContact(e.target.value);
              }}
            />
            <TextField
              id="email"
              value={textEmail}
              label="Email"
              variant="outlined"
              onChange={(e) => {
                setTextEmail(e.target.value);
              }}
            />
            <div style={{ display: 'flex', justifyContent: 'end' }}>
              <Button variant="contained" onClick={sendContactDatabase}>
                Save
              </Button>
            </div>
          </FormGroup>
        </Box>
      </Modal>

      <Grid container spacing={2}>
        {/* About Section */}
        <div className="wrapper">
          <div className="section">
            <div className="section-header">
              <p>
                <b>Personal Details</b>
              </p>
              <Button
                variant="contained"
                className="edit-button"
                onClick={handleAboutButtonClick}
              >
                Edit
              </Button>
            </div>
          </div>
          <Line />

          <div className="section-details">
            <div className="section-items">
              <p className="section-items-head">Name</p>
              <p className="section-items-details" id="name-id">
                {textName}
              </p>
            </div>
            <div className="section-items">
              <p className="section-items-head">University ID</p>
              <p className="section-items-details" id="university-id">
                {textUniversityId}
              </p>
            </div>
          </div>
        </div>

        {/* Contact Details Section */}
        <div className="wrapper">
          <div className="section">
            <div className="section-header">
              <p>
                <b>Contact Details</b>
              </p>
              <Button
                variant="contained"
                className="edit-button"
                onClick={handleContactButtonClick}
              >
                Edit
              </Button>
            </div>
          </div>
          <Line />

          <div className="section-details">
            <div className="section-items">
              <p className="section-items-head">Contact</p>
              <p className="section-items-details" id="contact-id">
                {textContact}
              </p>
            </div>
            <div className="section-items">
              <p className="section-items-head">Email</p>
              <p className="section-items-details" id="email-id">
                {textEmail}
              </p>
            </div>
          </div>
        </div>
        {/* Additional Details Section */}
        <div className="wrapper">
          <div className="section">
            <div className="section-header">
              <p>
                <b>Additional Details</b>
              </p>

              <Button variant="contained" className="edit-button">
                Edit
              </Button>
            </div>
            <Line />
            <div className="section-details">
              {data.additional_info.map((item) => (
                <ProfileRow {...item} />
              ))}
            </div>
          </div>
        </div>
      </Grid>
    </>
  );
}
