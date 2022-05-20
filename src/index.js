import React from 'react';
import ReactDOM from 'react-dom';
import Home from './pages/home/Home';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import TeamPage from './pages/team/TeamPage';
import TeamList from './pages/team/TeamList';
import PlayerSearchPage from './pages/player/PlayerSearchPage'; 
import './App.css'
import RulesPage from './components/RulesPage';
import About from './pages/about/About';
import LeagueSchedulePage from './pages/LeagueSchedule/LeagueSchedulePage'
import GameStatsPage from './pages/GameStatsPage';
import PlayerPage from './pages/player/PlayerPage';
import StandingsPage from './components/Standings/StandingsPage';
import LeagueLeaderPage from './components/LeagueLeaders/LeagueLeaderPage';


ReactDOM.render(
  <div className='flex items-center justify-center w-screen max-w-screen-2xl bg-gray1'>
  <Router>
    <Route exact path="/" render={Home} />
    <Route exact path="/team/:tn" render={TeamPage} />
    <Route exact path="/team" render={TeamList} />
    <Route exact path="/players" render={PlayerSearchPage} />
    <Route exact path="/rules" render={RulesPage} />
    <Route exact path="/about" render={About} /> 
    <Route exact path="/schedule">
      <LeagueSchedulePage />
    </Route>
    <Route exact path ="/player/:playerId">
      <PlayerPage key={Date.now()}/>
    </Route>
    <Route exact path="/game/:gameId" >
      <GameStatsPage key={Date.now()} />
    </Route>
    <Route exact path="/leagueleaders">
      <LeagueLeaderPage />
    </Route>
  </Router>
  </div>,
  document.getElementById('root')
);