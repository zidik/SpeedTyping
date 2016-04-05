"use strict";
import React from 'react';

class WordField extends React.Component {
    constructor(props) {
        super(props);
        this.state = {value: ""};
        this.handleChange = this.handleChange.bind(this);
    }

    render() {
        return <input
            type="text"
            value={this.state.value}
            onChange={this.handleChange}
            />
    }

    handleChange(e) {
        this.setState({value: e.target.value})
    }
}

export default WordField;