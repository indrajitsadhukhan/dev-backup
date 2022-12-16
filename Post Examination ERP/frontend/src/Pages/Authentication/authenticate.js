import React, { useState, useEffect } from 'react';
import {
  Grid, Tabs, Tab, Typography, Box, Paper,
} from '@mui/material';
import PropTypes from 'prop-types';
import Login from './login';
import Register from './register';

function TabPanel(props) {
  const {
    children, value, index, ...other
  } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`horizontal-tabpanel-${index}`}
      aria-labelledby={`horizontal-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  // eslint-disable-next-line react/require-default-props
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

export default function Authenticate({ type }) {
  const [tab, setTab] = useState(0);

  useEffect(() => {
    if (type === 'login') {
      setTab(0);
    } else {
      setTab(1);
    }
  }, [type]);

  return (
    <Grid
      container
      spacing={0}
      direction="column"
      alignItems="center"
      justifyContent="center"
      style={{ minHeight: '100vh' }}
    >
      <Grid item xs={6}>
        <Paper elevation={6} sx={{ minHeight: '60vh' }}>
          <Tabs
            value={tab}
            onChange={(e, v) => setTab(v)}
            variant="scrollable"
            scrollButtons
            allowScrollButtonsMobile
          >
            <Tab label="Login" />
            <Tab label="Register" />
          </Tabs>
          <TabPanel value={tab} index={0}>
            <Login />
          </TabPanel>
          <TabPanel value={tab} index={1}>
            <Register />
          </TabPanel>
        </Paper>
      </Grid>
    </Grid>
  );
}

Authenticate.propTypes = {
  type: PropTypes.string,
};
