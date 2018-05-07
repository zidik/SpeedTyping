import PropTypes from 'prop-types';
import React from "react";
import Statistics from "./../containers/Statistics";
import Words from "./../containers/Words";
import StartStopButton from "./../containers/StartStopButton";
import HighScore from "./../containers/HighScore";
import Paper from "material-ui/Paper";

function GameInstance(props) {

    function capitalizeFirstLetter(string) {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }

    const showHeader = (props.gameType == "local") || props.gameType == "remote";
    const showHighScore = (props.gameType == "local") || props.gameType == "remote";

    return (
        <Paper className="gameInstance">
            {showHeader ? <h3> {capitalizeFirstLetter(props.gameType)} </h3> : ""}
            <Words gameType={props.gameType} gameNo={props.gameNo}/>
            {props.gameType == "local" ? <StartStopButton /> : ""}
            <Statistics gameType={props.gameType} gameNo={props.gameNo}/>
            {showHighScore ? <HighScore gameType={props.gameType} gameNo={props.gameNo}/> : ""}

        </Paper>

    );
}

GameInstance.propTypes = {
    gameType: PropTypes.string.isRequired,
    gameNo: PropTypes.number.isRequired
};

export default GameInstance;