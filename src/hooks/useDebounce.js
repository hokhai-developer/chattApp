import React, { useEffect, useState } from 'react';

export const useDebounce = (value, delay = 500) => {
    const [debounce, setDebounce] = useState('');
    useEffect(() => {
        const timerId = setTimeout(() => {
            setDebounce(value.trim());
        }, delay);
        return () => {
            if (timerId) clearTimeout(timerId);
        };
    }, [value]);
    return debounce;
};
