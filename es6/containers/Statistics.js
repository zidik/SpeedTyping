import {connect} from "react-redux";
import Statistics from "./../components/Statistics";
import {selectGame, calcAccuracy, calcWordsPerMinute} from "./../reducers/selectors";
import {calcTimeElapsed} from "./../reducers";

function mapStateToProps(state, props) {
    const game = selectGame(state, props);
    return {
        wordsPerMinute: calcWordsPerMinute(game).toFixed(2),
        accuracy: calcAccuracy(game).toFixed(0),
        time: (calcTimeElapsed(game) / 1000).toFixed(1)
    }
}

export default connect(mapStateToProps)(Statistics);