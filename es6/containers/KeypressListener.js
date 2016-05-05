import {connect} from "react-redux";
import KeypressListener from "./../components/KeypressListener";
import {keyPressed} from "../actions/keypress";

const mapStateToProps = null;

const mapDispatchToProps = (dispatch) => ({
    handleKeyPress: (key) => dispatch(keyPressed(key))
});

export default connect(mapStateToProps, mapDispatchToProps)(KeypressListener);