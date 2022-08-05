export const generateKeywords = (value) => {
    let result = [];
    if (!value || value.trim().length === 0) {
        return result;
    }
    const newValue = value.trim().replaceAll(' ', '').toLowerCase();
    for (let i = 0; i < newValue.length; i++) {
        let key = newValue.slice(0, i + 1);
        result.push(key);
    }
    return result;
};
