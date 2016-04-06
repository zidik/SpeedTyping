"use strict";
import React from 'react';
import TypingGame from "./TypingGame"

class TypingGameContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {currentInput: ""};
        this.handleInputChange = this.handleInputChange.bind(this);
    }

    handleInputChange(e) {
        this.setState({currentInput: e.target.value})
    }

    render()  {
        return <TypingGame
            words={["random", "words", "are", "here", "saab", "volvo"]}
            activeWordIndex = {1}
            wpm={100}
            acc={103}
            inputValue={this.state.currentInput}
            onInputChange={this.handleInputChange}
            />
    }
}

export default TypingGameContainer;
