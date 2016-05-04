import Words from "../components/Words";
import {connect} from "react-redux";

function mapStateToProps(state, props) {
    const game = props.isLocal ? state.localGame : state.remoteGame;

    return {
        words: game.words,
        playerWords: game.playerWords,
        active: game.playerWords.length - 1
    }
}

export default connect(mapStateToProps)(Words);