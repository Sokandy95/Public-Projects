// Storing info in local storage when we leave page

import { useState, useEffect } from "react";

export default function useLocalStorage(key, defaultVal) {
    const [val, setVal] = useState(() => {
        // take in function to get value from local storage
        const jsonVal = localStorage.getItem(key)
        if (jsonVal != null) return JSON.parse(jsonVal) // if we have the value, parse it and return it
        if (typeof defaultVal === "function") {
            return defaultVal(); // check if it is function
        } else {
            return defaultVal; // otherwise return the default value
        }
    })
    // when val changes, we want to update our JSON with the value
    useEffect(() => {
        localStorage.setItem(key, JSON.stringify(val))
    }, [ key, val ])

    return [ val, setVal ]
}