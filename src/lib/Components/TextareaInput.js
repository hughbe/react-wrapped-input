import React from 'react';

const TextareaInput = ({ name, value, placeholder, className, ...rest }) => {
    const input = (
        <textarea
            rows={5}
            placeholder={placeholder || name}
            className={`form-control${className ? ' ' + className : ''}`}
            value={value.get()}
            onChange={event => value.set(event.target.value)}
            {...rest}
        />
    );
    if (!name) {
        return input;
    }

    return (
        <div className="form-group">
            <label>{name}</label>
            {input}
        </div>
    );
}
export default TextareaInput;
