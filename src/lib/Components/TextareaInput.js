import React from 'react';

const TextareaInput = ({ name, value, ...rest }) => (
    <div className="form-group">
        <label>{name}</label>
        <textarea
            rows={5}
            placeholder={name}
            className="form-control"
            value={value.get()}
            onChange={event => value.set(event.target.value)}
            {...rest}
        />
    </div>
);
export default TextareaInput;
