import React from 'react';
import focusNextInput from '../Utilities/FocusNextInput';

export default class WrappedInput extends React.Component {
    state = {};

    handleChanged = (event) => {
        const  { trimValueOnPaste = true, focusNextInputOnPaste = true, value } = this.props;
        if (this.state.pasting && trimValueOnPaste) {
            value.set(event.target.value.trim());
            if (focusNextInputOnPaste) {
                focusNextInput(event.target);
            }
            this.setState({pasting: false});
        } else {
            value.set(event.target.value);
        }
    }

    handlePasted = () => {
        this.setState({pasting: true});
    }

    render() {
        const { type, name, value, placeholder, className, ...rest } = this.props;

        return (
            <input
                type={type}
                placeholder={placeholder || name}
                className={`form-control${className ? ' ' + className : ''}`}
                value={value.get()}
                onChange={this.handleChanged}
                onPasteCapture={this.handlePasted}
                {...rest}
            />
        );
    }
}