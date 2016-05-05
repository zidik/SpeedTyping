import React from "react";
import Statistics from "./../containers/Statistics";
import Words from "./../containers/Words";
import StartStopButton from "./../containers/StartStopButton";
import HighScore from "./../containers/HighScore";
import Paper from 'material-ui/Paper';

const TypingGameInstance = (props)=>(
    <Paper className="gameInstance">
        <h3> {props.isLocal ? "Local" : "Remote"} </h3>
        <Words isLocal={props.isLocal}/>
        {props.isLocal ? <StartStopButton /> : ""}
        <Statistics isLocal={props.isLocal}/>
        <HighScore isLocal={props.isLocal}/>
    </Paper>

);

TypingGameInstance.propTypes = {
    isLocal: React.PropTypes.bool.isRequired
};

export default TypingGameInstance;