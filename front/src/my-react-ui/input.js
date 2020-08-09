import React, { useState } from 'react';

function Input(props) {
    const [value, setValue] = useState(props.value || '');

    const getValue = props.getValue;

    function handleChange(event) {
        setValue(event.target.value);
        getValue && getValue(event.target.value);
    }

    return (
        <input value={value} onChange={handleChange} />
    );
}

export default Input;