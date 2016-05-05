import Words from "../components/Words";
import {connect} from "react-redux";
import {selectGame} from "../reducers/selectors";


function mapStateToProps(state, props) {
    const game = selectGame(state, props);

    return {
        words: game.words,
        playerWords: game.playerWords,
        active: game.playerWords.length - 1
    }
}

export default connect(mapStateToProps)(Words);