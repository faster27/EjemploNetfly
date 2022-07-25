import { useState } from 'react';

const useCounter = (initialValue = 0) => {
    const [value, setValue] = useState(initialValue);

    const increment = () => setValue((x) => x + 1);
    const decrement = () => setValue((x) => x - 1);
    const reset = () => setValue(initialValue || 0);

    return {
        value,
        increment,
        decrement,
        reset,
        setValue,
    };
};

export default useCounter;
