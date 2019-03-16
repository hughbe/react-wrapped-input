export default function numberWrap(wrap) {
    return {
        get: () => new Number(wrap.get()),
        set: (newValue) => wrap.set(new Number(newValue))    
    };
}