"use strict";
import React from 'react';
import Statistics from "./Statistics";
import InputField from "./InputField"
import Words from "./Words"

class TypingGame extends React.Component {
    render() {
        return  <div>
                    <h2> Typing Game </h2>
                    <Words words={this.props.words} active={this.props.activeWordIndex} />
                    <InputField value={this.props.inputValue} onChange={this.props.onInputChange}/>
                    <Statistics wpm={this.props.wpm} acc={this.props.acc} />
                </div>
    }
}
TypingGame.propTypes = {
    words: React.PropTypes.arrayOf(React.PropTypes.string).isRequired,
    activeWordIndex: React.PropTypes.number.isRequired,
    wpm: React.PropTypes.number.isRequired,
    acc: React.PropTypes.number.isRequired

};

export default TypingGame;