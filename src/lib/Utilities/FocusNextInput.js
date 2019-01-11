function focusNextInput(target) {
    const form = target.form;
    if (form) {
        const index = Array.prototype.indexOf.call(form, target);
        if (index + 1 < form.elements.length) {
            form.elements[index + 1].focus();
        }
    }
}

export default focusNextInput;