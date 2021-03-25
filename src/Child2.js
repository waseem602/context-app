import React, { useReducer } from 'react';
import counterReducer from './counterReducer';

const Child2 = () => {

    let [state, dispatch] = useReducer(counterReducer, 1);

    console.log(state);
    return(
        <div>
            <h1>
                This is second Child using useReducer.
            </h1>
            <h2>
                Value of reducer state is: {state}
            </h2>
            <button onClick = {() => dispatch('INCREMENT')}>Increment Reducer</button>
        </div>
    )
}

export default Child2;