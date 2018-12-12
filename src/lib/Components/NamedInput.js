import React from 'react';
import WrappedInput from './WrappedInput';

const NamedInput = ({ name, ...rest }) => {
    if (!name) {
        return <WrappedInput {...rest} />
    }

    return (
        <div className="form-group">
            <label>{name}</label>
            <WrappedInput name={name} {...rest} />
        </div>
    );
}
export default NamedInput;
