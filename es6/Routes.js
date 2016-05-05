import React from "react";
import { Router, Route, IndexRoute } from 'react-router';
import About from './components/About';
import AppWrapper from './containers/AppWrapper';
import PastGames from './containers/PastGames';
import TypingGame from './containers/TypingGame';


export default (history) => () => {
  return(
    <Router history={history}>
      <Route path="/" component={AppWrapper}>
        <IndexRoute component={TypingGame} />
        <Route path="/play" component={TypingGame} />
        <Route path="/pastGames" component={PastGames} />
        <Route path="/about" component={About} />
      </Route>
    </Router>
  )
}