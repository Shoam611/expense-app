import { useEffect, useState } from "react";

const useLocalStorage = (key, newValue = null) => {
    const [value, setValue] = useState(() => {
        const storedValue = window.localStorage.getItem(key);
        return storedValue !== null ? JSON.parse(storedValue) : newValue;
    });
    useEffect(() => {
        window.localStorage.setItem(key, JSON.stringify(value));
    }, [value]);
    return [value, setValue];
};
export default useLocalStorage;
