const getValue = (value, name1, name2, name3, name4) => {
    if (!name1) {
        return value || '';
    }
    
    const value1 = value[name1];
    if (!value1 || !name2) {
        return value1 || '';
    }

    const value2 = value1[name2];
    if (!value2 || !name3) {
        return value2 || '';
    }
    
    const value3 = value2[name3] || '';
    if (!value3 || !name4) {
        return value3 || '';
    }

    return value3[name4] || '';
};

const getSetValue = (value, newValue, name1, name2, name3, name4) => {
    if (!name2) {
        return Object.assign({}, value, {[name1]: newValue});
    } else if (!name3) {
        const value1 = Object.assign({}, value[name1], {[name2]: newValue});
        return {[name1]: value1};
    } else if (!name4) {
        const value2 = Object.assign({}, value[name1][name2], {[name3]: newValue});
        const value1 = Object.assign({}, value[name1], {[name2]: value2});
        return {[name1]: value1};
    } else {
        const value3 = Object.assign({}, value[name1][name2][name3], {[name4]: newValue});
        const value2 = Object.assign({}, value[name1][name2], {[name3]: value3});
        const value1 = Object.assign({}, value[name1], {[name2]: value2});
        return {[name1]: value1};
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