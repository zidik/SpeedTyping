import {connect} from "react-redux";
import HighScore from "./../components/HighScore";
import {selectGame, highestWordsPerMinute, highestAccuracy} from "./../reducers/selectors";

function mapStateToProps(state, props) {
    const game = selectGame(state, props);
    return {
        wordsPerMinute: highestWordsPerMinute(game.pastGames).toFixed(2),
        accuracy: highestAccuracy(game.pastGames).toFixed(0)
    }
}

export default connect(mapStateToProps)(HighScore);