import * as React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { useDispatch, useSelector } from 'react-redux';
import {
  PROGRAMME_TAB, COURSES_TAB, Tabs1, Tabs2, DOCUMENTS_TAB, SETTINGS_TAB, PROFILE_TAB,
} from './constants';
import { changeTab } from './dashboardSlice';
import Programme from './Programme/programme';
import Course from './Course/course';
import Settings from './Settings/settings';
import Document from './Document/document';
import styles from './dashboard.module.scss';
import Profile from './Profile/profile';

const drawerWidth = 240;

function Dashboard(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const dispatch = useDispatch();
  const dashboard = useSelector((state) => state.dashboard);

  const tabs = {
    [PROGRAMME_TAB]: [<Programme />],
    [COURSES_TAB]: <Course />,
    [DOCUMENTS_TAB]: <Document />,
    [SETTINGS_TAB]: <Settings />,
    [PROFILE_TAB]: <Profile />,
  };

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const handleTabChange = (tab) => {
    dispatch(changeTab(tab));
  };

  const drawer = (
    <div>
      <Toolbar>
        <Typography variant="h6" sx={{ mx: 'auto', fontWeight: 800 }}>
          Dashboard
        </Typography>
      </Toolbar>
      <Divider />
      <List>
        {Object.keys(Tabs1).map((tab) => (
          <div key={tab} className={tab === dashboard.activeTab ? styles.tabLink__active : ''} onClick={() => handleTabChange(tab)}>
            <ListItem button>
              <ListItemIcon>
                {Tabs1[tab].icon}
              </ListItemIcon>
              <ListItemText primary={tab} />
            </ListItem>
          </div>
        ))}
      </List>
      <Divider />
      <List>
        {Object.keys(Tabs2).map((tab) => (
          <div key={tab} className={tab === dashboard.activeTab ? styles.tabLink__active : ''} onClick={() => handleTabChange(tab)}>
            <ListItem button onClick={() => handleTabChange(tab)}>
              <ListItemIcon>
                {Tabs2[tab].icon}
              </ListItemIcon>
              <ListItemText primary={tab} />
            </ListItem>
          </div>
        ))}
      </List>
    </div>
  );

  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` },
          backgroundColor: 'white',
          color: 'black',
          boxShadow: 'none',
          borderBottom: '1px solid #E0E0E0',
        }}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'none' } }}
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
        >
          {drawer}
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: 'none', sm: 'block' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>
      <Box
        component="main"
        sx={{ flexGrow: 1, p: 3, width: { sm: `calc(100% - ${drawerWidth}px)` } }}
      >
        <Toolbar />
        {tabs[dashboard.activeTab] || null}
      </Box>
    </Box>
  );
}

Dashboard.propTypes = {
  /**
     * Injected by the documentation to work in an iframe.
     * You won't need it on your project.
     */
  // eslint-disable-next-line react/require-default-props
  window: PropTypes.func,
};

export default Dashboard;
