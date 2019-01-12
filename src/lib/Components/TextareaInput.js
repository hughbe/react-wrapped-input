import React from 'react';
import focusNextInput from '../Utilities/FocusNextInput';

export default class TextareaInput extends React.Component {
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
        const { name, value, placeholder, className, ...rest } = this.props;

        const input = (
            <textarea
                rows={5}
                placeholder={placeholder || name}
                className={`form-control${className ? ' ' + className : ''}`}
                value={value.get()}
                onChange={this.handleChanged}
                onPaste={this.handlePasted}
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
}