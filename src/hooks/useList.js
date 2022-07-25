import { useState } from 'react';

const useList = (initialValue = []) => {
    const [value, setValue] = useState(initialValue);

    // Push new value to list
    const push = (element) => {
        setValue((oldValue) => [...oldValue, element]);
    };

    // Remove value from list
    const remove = (index) => {
        setValue((oldValue) => oldValue.filter((_, i) => i !== index));
    };

    // List is Empty
    const isEmpty = () => value.length === 0;

    // Clear all the list
    const clear = () => setValue([]);

    // Order the tasks alphabetic
    const orderAlphabetic = () => {
        setValue([...value].sort());
    };

    // Invert the tasks
    const inverseOrder = () => {
        setValue([...value].reverse());
    };

    // TODO: Develop more functions for lists

    return {
        value, setValue, push, remove, isEmpty, clear, orderAlphabetic, inverseOrder,
    };
};

export default useList;
