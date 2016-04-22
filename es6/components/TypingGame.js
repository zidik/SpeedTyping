import React from "react";
import Statistics from "./../containers/Statistics";
import InputField from "./../containers/InputField";
import Words from "./../containers/Words";
import StartStopButton from "./../containers/StartStopButton"
import HighScore from "./../containers/HighScore"

const TypingGame = (props)=>(
    <div>
        <h2> Typing Game </h2>
        <Words />
        <InputField />
        <StartStopButton />
        <Statistics />
        <HighScore />
    </div>
);

TypingGame.propTypes = {};

export default TypingGame;