import React from 'react';
import ReactDOM from 'react-dom';
import Home from './pages/home/Home';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import TeamPage from './pages/team/TeamPage';
import TeamList from './pages/team/TeamList';
import PlayerSearchPage from './pages/player/PlayerSearchPage'; 
import './App.css'
import RulesPage from './components/RulesPage';
import TeamSchedule from './components/TeamSchedule';

ReactDOM.render(
  <Router>
    <Route exact path="/" render={Home} />
    <Route exact path="/team/:tn" render={TeamPage} />
    <Route exact path="/team" render={TeamList} />
    <Route exact path="/players" render={PlayerSearchPage} />
    <Route exact path="/rules" render={RulesPage} />

  </Router>,
  document.getElementById('root')
);