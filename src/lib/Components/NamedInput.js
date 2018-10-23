import React from 'react';
import WrappedInput from './WrappedInput';

const NamedInput = (props) => (
    <div className="form-group">
        <label>{props.name}</label>
        <WrappedInput {...props} />
    </div>
);
export default NamedInput;
