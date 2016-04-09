"use strict";

import React from 'react';
import TypingGame from "./TypingGame"

class TypingGameContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            currentInput: "",
            playerWords: [],
            startTime: (new Date()).getTime()
        };
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleFullWord = this.handleFullWord.bind(this);
    }

    handleFullWord(word) {
        this.setState({
            playerWords: this.state.playerWords.concat([word])
        });
    }

    handleInputChange(e) {
        //var curInput = this.state.currentInput;
        var newInput = e.target.value;

        //Disable deletion
        //if (newInput.length < curInput.length) newInput = curInput;

        //Parse spaces
        var wordsInInput = newInput.split(" ");
        while(wordsInInput.length > 1){
            this.handleFullWord(wordsInInput.shift());
        }

        //Update input
        this.setState({currentInput: wordsInInput[0]});
    }

    render()  {
        return <TypingGame
            words={["random", "words", "are", "here", "saab", "volvo"]}
            playerWords = {this.state.playerWords.concat([this.state.currentInput])}
            activeWordIndex = {this.state.playerWords.length}

            startTime = {this.state.startTime}

            inputValue={this.state.currentInput}
            onInputChange={this.handleInputChange}
            />
    }
}

export default TypingGameContainer;
