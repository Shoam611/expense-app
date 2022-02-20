import { useEffect, useState } from "react";

const useSessionStorage = (key, newValue = null) => {
    const [value, setValue] = useState(() => {
        const storedValue = window.sessionStorage.getItem(key);
        return storedValue !== null ? JSON.parse(storedValue) : newValue;
    });
    useEffect(() => {
        window.sessionStorage.setItem(key, JSON.stringify(value));
    }, [value]);
    return [value, setValue];
};
export default useSessionStorage;