import React from "react";
import Statistics from "./../containers/Statistics";
import InputField from "./../containers/InputField";
import Words from "./../containers/Words";

const TypingGame = (props)=>(
    <div>
        <h2> Typing Game </h2>
        <Words />
        <InputField />
        <Statistics />
    </div>
);

TypingGame.propTypes = {};

export default TypingGame;