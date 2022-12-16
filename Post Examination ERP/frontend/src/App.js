import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';
import { Provider } from 'react-redux';
import Authenticate from './Pages/Authentication/authenticate';
import Dashboard from './Pages/Dashboard/dashboard';
import store from './Store/store';

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Routes>
          <Route path="/login" element={<Authenticate type="login" />} />
          <Route path="/register" element={<Authenticate type="register" />} />
          <Route path="/" element={<Dashboard />} />
        </Routes>
      </Router>
    </Provider>
  );
}

export default App;
