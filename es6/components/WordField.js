"use strict";
import React from 'react';

const WordField = (props) => <input className="typing-container" value={props.value} onChange={props.onChange} />;

export default WordField;