import React from "react";
import { Router, Route, IndexRoute } from 'react-router';
import TypingGame from './containers/TypingGame';
import AppWrapper from './components/AppWrapper';


export default (history) => () => {
  return(
    <Router history={history}>
      <Route path="/" component={AppWrapper}>
        <IndexRoute component={TypingGame} />
        <Route path="/play" component={TypingGame} />
        <Route path="/pastGames" component={TypingGame} />
        <Route path="/about" component={TypingGame} />
      </Route>
    </Router>
  )
}