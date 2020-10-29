import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Container } from 'reactstrap';

import './Main.css';
import Sidebar from '../sidebar/Sidebar';
import Header from '../header/Header';
import MainContent from './MainContent';

const Main = () => {
  return (
    <Router>
      <Container className="themed-container" fluid>
        <Header />
        <Sidebar />
        <Switch>
          <Route path="/about">
            <MainContent />
          </Route>
        </Switch>
      </Container>
    </Router>
  );
};

export default Main;
