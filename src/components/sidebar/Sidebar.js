import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import './Sidebar.css';

const Sidebar = props => {
  return (
    <Link className="sidebar" to="/about">About</Link>
  );
}

Sidebar.propTypes = {
  name: PropTypes.string
};

export default Sidebar;