const getValue = (value, name1, name2, name3, name4) => {
    if (typeof name1 === 'undefined') {
        return value || '';
    }
    
    const value1 = value[name1];
    if (!value1 || typeof name2 === 'undefined') {
        return value1 || '';
    }

    const value2 = value1[name2];
    if (!value2 || typeof name3 === 'undefined') {
        return value2 || '';
    }
    
    const value3 = value2[name3] || '';
    if (!value3 || typeof name4 === 'undefined') {
        return value3 || '';
    }

    return value3[name4] || '';
};

const setValue = (value, newValue, name) => {
    if (Array.isArray(value)) {
        value[name] = newValue;
        return value;
    }

    return Object.assign({}, value, {[name]: newValue});
}

const getSetValue = (value, newValue, name1, name2, name3, name4) => {
    if (typeof name2 === 'undefined') {
        return setValue(value, newValue, name1);
    } else if (typeof name3 === 'undefined') {
        const value1 = setValue(value[name1], newValue, name2);
        return setValue(value, value1, name1);
    } else if (typeof name4 === 'undefined') {
        const value2 = setValue(value[name1][name2], newValue, name3);
        const value1 = setValue(value[name1], value2, name2);
        return setValue(value, value1, name1);
    } else {
        const value3 = setValue(value[name1][name2][name3], newValue, name3);
        const value2 = setValue(value[name1][name2], value3, name3);
        const value1 = setValue(value[name1], value2, name2);
        return setValue(value, value1, name1);
    }
};

const wrap = (self, name1, name2, name3, name4) => ({
    get: () => getValue(self.state, name1, name2, name3, name4),
    set: (newValue) => self.setState(getSetValue(self.state, newValue, name1, name2, name3, name4))
});

const combineWrap = (wrap, name1, name2, name3, name4) => ({
    get: () => getValue(wrap.get(), name1, name2, name3, name4),
    set: (newValue) => {
        const newValueSet = getSetValue(wrap.get(), newValue, name1, name2, name3, name4);
        wrap.set(newValueSet);
    }
});

export { combineWrap };
export default wrap;