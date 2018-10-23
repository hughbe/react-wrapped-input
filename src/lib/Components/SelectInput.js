import React from 'react';

const SelectInput = ({ name, value, children }) => (
    <select
        className="form-control"
        onChange={event => value.set(event.target.value)}
        value={value.get()}
    >
        <option>{name}</option>
        {children.map(c => <option>{c}</option>)}
    </select>
);
export default SelectInput;