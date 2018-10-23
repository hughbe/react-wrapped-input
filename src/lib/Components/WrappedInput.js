import React from 'react';

const WrappedInput = ({ type, name, value, placeholder, key, ...rest }) => (
    <input
        type={type}
        placeholder={placeholder || name}
        className="form-control"
        onChange={event => value.set(event.target.value)}
        value={value.get()}
        {...rest}
    />
);
export default WrappedInput;
