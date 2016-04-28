"use strict";

import React from "react";

import TypingGameInstance from "./TypingGameInstance";

const TypingGame = (props)=>(
    <div className="typingGame">
        <h2> Typing Game </h2>
        <div className="gameInstances">
            <TypingGameInstance isLocal={true}  />
            <TypingGameInstance isLocal={false} />
        </div>
    </div>

);

TypingGame.propTypes = {};

export default TypingGame;