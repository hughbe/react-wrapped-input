import React from 'react';

const CheckboxInput = ({ name, value, key, ...rest }) => (
    <div className="form-check mb-3">
        <input
            type="checkbox"
            className="form-check-input"
            onChange={event => value.set(event.target.checked)}
            checked={value.get()}
            {...rest}
        />
        <label className="form-check-label">{name}</label>
    </div>
);
export default CheckboxInput;
