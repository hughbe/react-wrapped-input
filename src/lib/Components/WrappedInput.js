import React from 'react';

const WrappedInput = ({ type, name, value, placeholder, className, ...rest }) => (
    <input
        type={type}
        placeholder={placeholder || name}
        className={`form-control${className ? ' ' + className : ''}`}
        onChange={event => value.set(event.target.value)}
        value={value.get()}
        {...rest}
    />
);
export default WrappedInput;
