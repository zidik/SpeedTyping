import React from "react";

export default class KeypressListener extends React.Component {
    constructor(props) {
        super(props);
        this.handleKeyPress = this.handleKeyPress.bind(this);
    }
    componentDidMount() {
        window.addEventListener('keypress', this.handleKeyPress)
    }
    componentWillUnmount() {
        window.removeEventListener('keypress', this.handleKeyPress)
    }
    handleKeyPress(event) {
        const charString = String.fromCharCode(event.keyCode)
        this.props.handleKeyPress(charString)
    }
    render() {
        return <span />;
    }
}

KeypressListener.propTypes = {
    handleKeyPress: React.PropTypes.func.isRequired
}

export default KeypressListener;