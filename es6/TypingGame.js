"use strict";
import React from 'react';
import Statistics from "./Statistics";
import InputField from "./InputField"
import Words from "./Words"

class TypingGame extends React.Component {
    render() {
        var words = ["random", "words", "are", "here", "saab", "volvo"];
        return  <div>
                    <h2> Typing Game </h2>
                    <Words words={words} />
                    <InputField />
                    <Statistics wpm={100} acc={67} />
                </div>
    }
}

export default TypingGame;