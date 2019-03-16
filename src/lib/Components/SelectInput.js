import React from 'react';

function getChildren(children) {
    if (!Array.isArray(children) || children.length === 0) {
        return children;
    }

    // Convert an array of strings into an array of options.
    if (typeof children[0] === 'string' || children[0] instanceof String) {
        return children.map(c => <option key={c}>{c}</option>);
    }

    return children;
}

export default function SelectInput({ name, value, children, ...rest }) {
    const input = (
        <select
            className="form-control"
            onChange={event => value.set(event.target.value)}
            value={value.get()}
            {...rest}
        >
            {name && <option>{name}</option>}
            {getChildren(children)}
        </select>
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