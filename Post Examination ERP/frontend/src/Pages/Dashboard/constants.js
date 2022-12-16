import WorkspacePremiumIcon from '@mui/icons-material/WorkspacePremium';
import BookIcon from '@mui/icons-material/Book';
import ArticleIcon from '@mui/icons-material/Article';
import SettingsIcon from '@mui/icons-material/Settings';
import PersonIcon from '@mui/icons-material/Person';
import * as React from 'react';

export const PROGRAMME_TAB = 'Programme';
export const COURSES_TAB = 'Courses';
export const DOCUMENTS_TAB = 'Documents';
export const SETTINGS_TAB = 'Settings';
export const PROFILE_TAB = 'Profile';

export const Tabs1 = {
  [PROGRAMME_TAB]: {
    icon: <WorkspacePremiumIcon />,
  },
  [COURSES_TAB]: {
    icon: <BookIcon />,
  },
  [DOCUMENTS_TAB]: {
    icon: <ArticleIcon />,
  },
};

export const Tabs2 = {
  [SETTINGS_TAB]: {
    icon: <SettingsIcon />,
  },
  [PROFILE_TAB]: {
    icon: <PersonIcon />,
  },
};
