import React from "react";
import Statistics from "./../containers/Statistics";
import InputField from "./../containers/InputField";
import Words from "./../containers/Words";
import StartStopButton from "./../containers/StartStopButton";
import HighScore from "./../containers/HighScore";

const TypingGame = (props)=>(
    <div className="gameInstance">
            <h3> {props.isLocal?"Local":"Remote"} </h3>
            <Words />
            {props.isLocal?<InputField />:""}
            {props.isLocal?<StartStopButton />:""}
            <Statistics />
            <HighScore />
    </div>

);

TypingGame.propTypes = {
    isLocal: React.PropTypes.bool.isRequired
};

export default TypingGame;