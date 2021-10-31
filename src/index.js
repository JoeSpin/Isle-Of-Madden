import React from 'react';
import ReactDOM from 'react-dom';
import Home from './pages/home/Home';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import TeamPage from './pages/team/TeamPage';
import TeamList from './pages/team/TeamList';
import './App.css'

ReactDOM.render(
  <Router>
    <Route exact path="/" render={Home} />
    <Route exact path="/team/:tn" render={TeamPage} />
    <Route exact path="/team" render={TeamList} />
  </Router>,
  document.getElementById('root')
);