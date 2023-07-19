import { useState } from 'react';
import PropTypes from 'prop-types';


// const csname = (a, b) => (a + b)

export const CounterApp = ({ value }) => {

    const [counter, setCounter] = useState(value);

    const handleAdd = () => {
        // setCounter(counter + 1);
        setCounter((c) => c + 1);
    }

    const handleSubstract = () => {
        // setCounter(counter - 1);
        setCounter((c) => c - 1);
    }

    const handleReset = () => {
        setCounter(value);
        // setCounter((c) =>  c = value );
    }

    return (
        <>
            <h1>CounterApp</h1>
            <h2>{counter}</h2>
            <button aria-label="btn-inc" onClick={handleAdd}> +1 </button>
            <button aria-label="btn-dec" onClick={handleSubstract}> -1 </button>
            <button aria-label="btn-reset" onClick={handleReset}> Reset </button>
        </>
    )
}

CounterApp.propTypes = {
    value: PropTypes.number,
}