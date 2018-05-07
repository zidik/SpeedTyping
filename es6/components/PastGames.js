import PropTypes from 'prop-types';
import React from "react";
import GameInstance from "./GameInstance";

const PastGames = (props)=>(
    <div className="gameInstances">
        {props.games.length === 0 ? <h3>No past games found... Hit "Play" </h3> : "" }
        {props.games.map((game, key) => <GameInstance gameType={game.gameType} gameNo={game.gameNo} key={key}/>)}
    </div>
);

PastGames.propTypes = {
    games: PropTypes.arrayOf(
        PropTypes.shape({
            gameType: PropTypes.string,
            gameNo: PropTypes.number
        })
    ).isRequired
};

export default PastGames;