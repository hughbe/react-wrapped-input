export default function numberWrap(wrap) {
    return {
        get: () => Number(wrap.get()),
        set: (newValue) => wrap.set(Number(newValue))    
    };
}