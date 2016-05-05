import {connect} from "react-redux";
import AppWrapper from "./../components/AppWrapper";
import { push } from 'react-router-redux';

const mapStateToProps = null

const mapDispatchToProps = (dispatch) => ({
    handleClick: (route) => () => dispatch(push(route))
})

export default connect(mapStateToProps, mapDispatchToProps)(AppWrapper);