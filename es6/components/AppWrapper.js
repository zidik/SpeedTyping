import React from "react";
import { Link } from 'react-router';
import FlatButton from 'material-ui/FlatButton';

const LinkToPlay = () => <FlatButton
        containerElement={<Link to="/play" />}
        label="Play" />
        
const LinkToPastGames = () => <FlatButton
        containerElement={<Link to="/pastGames" />}
        label="Past games" />
        
const LinkToAbout = () => <FlatButton
        containerElement={<Link to="/about" />}
        label="About" />


const AppWrapper = (props) => {
  return(
    <div>
      <h1>Speed Typer</h1>
      <LinkToPlay/>
      <LinkToPastGames/>
      <LinkToAbout/>
      {props.children}
    </div>
  )
}
AppWrapper.propTypes = {
    children: React.PropTypes.node.isRequired
}

export default AppWrapper;