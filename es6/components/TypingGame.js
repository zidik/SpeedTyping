import React from "react";
import TypingGameInstance from "./TypingGameInstance";
import KeypressListener from "./../containers/KeypressListener"

const TypingGame = (props)=>(
    <div className="typingGame">
        <div className="gameInstances">
            <TypingGameInstance isLocal={true}/>
            {props.showRemote ? <TypingGameInstance isLocal={false}/> : ""}
        </div>
        <KeypressListener />
    </div>

);

TypingGame.propTypes = {
    showRemote: React.PropTypes.bool.isRequired
};

export default TypingGame;