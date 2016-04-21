"use strict";

import Words from "../components/Words";
import {connect} from "react-redux";

const mapStateToProps = (state) => ({
    words: state.words,
    playerWords: state.playerWords,
    active: state.playerWords.length - 1
});

export default connect(mapStateToProps)(Words);