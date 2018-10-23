import React from 'react';
import NamedImport from './NamedInput';

const DateInput = (props) => (
    <NamedImport type="datetime-local" {...props} />
);
export default DateInput;
