import {connect} from "react-redux";
import PastGames from "./../components/PastGames";

function mapStateToProps(state) {
    return {
        games: state.localGame.pastGames.map((game, index) => ({gameType: "localPast", gameNo: index}))
    }
}

export default connect(mapStateToProps)(PastGames);