import React from "react";
import GameInstance from "./GameInstance";
import KeypressListener from "./../containers/KeypressListener"

const TypingGame = (props)=>(
    <div className="typingGame">
        <div className="gameInstances">
            <GameInstance gameType={"local"} gameNo={0}/>
            {props.showRemote ? <GameInstance gameType={"remote"} gameNo={0}/> : ""}
        </div>
        <KeypressListener />
    </div>

);

TypingGame.propTypes = {
    showRemote: React.PropTypes.bool.isRequired
};

export default TypingGame;