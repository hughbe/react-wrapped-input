import React from 'react';

const CheckboxInput = ({ name, value, key, ...rest }) => {
    const input = (
        <input
            type="checkbox"
            className={name && "form-check-input"}
            onChange={event => value.set(event.target.checked)}
            checked={value.get()}
            {...rest}
        />
    );
    if (!name) {
        return input;
    }

    return (
        <div className="form-check">
            {input}
            <label className="form-check-label">{name}</label>
        </div>
    );
}
export default CheckboxInput;
