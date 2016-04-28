"use strict";

import React from "react";
import TypingGameInstance from "./TypingGameInstance";

const TypingGame = (props)=>(
    <div className="typingGame">
        <h2> Typing Game </h2>
        <div className="gameInstances">
            <TypingGameInstance isLocal={true}/>
            {props.showRemote ? <TypingGameInstance isLocal={false}/> : console.log("WHUT")}
        </div>
    </div>

);

TypingGame.propTypes = {
    showRemote: React.PropTypes.bool.isRequired
};

export default TypingGame;