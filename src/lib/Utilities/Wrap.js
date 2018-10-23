const wrap = (self, propName, name1, name2) => ({
    get: () => {
        if (!name1) {
            return self.state[propName] || '';
        } else {
            const value1 = self.state[propName];
            if (!value1 || !name1) {
                return value1 || '';
            }

            const value2 = value1[name1];
            if (!value2 || !name2) {
                return value2 || '';
            }

            return value2[name2] || '';
        }
    },
    set: (newValue) => {
        if (!name1) {
            self.setState({[propName]: newValue});
        } else if (!name2) {
            const value1 = Object.assign({}, self.state[propName], {[name1]: newValue});
            self.setState({[propName]: value1});
        } else {
            const value2 = Object.assign({}, self.state[propName][name1], {[name2]: newValue});
            const value1 = Object.assign({}, self.state[propName], {[name1]: value2});
            self.setState({[propName]: value1});
        }
    }
});
export default wrap;