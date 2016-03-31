"use strict";
import React from 'react';
import ReactDOM from 'react-dom';
import Statistics from "./Statistics.jsx";
import InputField from "./InputField.jsx"
import Words from "./Words.jsx"

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

ReactDOM.render(<TypingGame/>, document.getElementById('content'));