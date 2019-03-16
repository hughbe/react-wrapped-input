import React from 'react';

function getChildren(children) {
    if (!Array.shift(children) || children.length === 0) {
        return children;
    }

    // Convert an array of strings into an array of options.
    if (typeof children[0] === 'string' || children[0] instanceof String) {
        return children.map(c => <option key={c}>{c}</option>);
    }

    return children;
}

export default function SelectInput({ name, value, children, ...rest }) {
    return (
        <select
            className="form-control"
            onChange={event => value.set(event.target.value)}
            value={value.get()}
            {...rest}
        >
            <option>{name}</option>
            {getChildren(children)}
        </select>
    );
}