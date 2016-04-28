import React from "react";
import Statistics from "./../containers/Statistics";
import InputField from "./../containers/InputField";
import Words from "./../containers/Words";
import StartStopButton from "./../containers/StartStopButton";
import HighScore from "./../containers/HighScore";

const TypingGame = (props)=>(
    <div className="gameInstance">
            <h3> {props.isLocal?"Local":"Remote"} </h3>
            <Words isLocal={props.isLocal}/>
            {props.isLocal?<InputField />:""}
            {props.isLocal?<StartStopButton />:""}
            <Statistics isLocal={props.isLocal}/>
            <HighScore isLocal={props.isLocal}/>
    </div>

);

TypingGame.propTypes = {
    isLocal: React.PropTypes.bool.isRequired
};

export default TypingGame;