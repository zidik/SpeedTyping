import {connect} from "react-redux";
import TypingGame from "./../components/TypingGame";

function mapStateToProps(state) {
    return {
        showRemote: state.remoteGame.connected
    }
}

export default connect(mapStateToProps)(TypingGame);