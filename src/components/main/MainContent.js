import React from 'react';
import PropTypes from 'prop-types';

import './MainContent.css';
import "./style.scss";

const MainContent = props => {
  return (
    <div className="main-content">About React SPA</div>
  );
}

MainContent.propTypes = {
  name: PropTypes.string
};

export default MainContent;