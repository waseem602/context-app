import React, { useContext } from 'react';
import counterContext from './counterContext';

const Child = () => {
    let counterValue = useContext(counterContext);
    console.log(counterValue);
    return (
        <div> 
            <h1> This is first child using counterContext </h1>
            <h2>Counter Value is: {counterValue[0]}</h2>
            <button onClick = {() => {counterValue[1](++counterValue[0])}}>Increment</button>
            <br />
            <button onClick = {() => {counterValue[1](--counterValue[0])}}>Decrement</button>
            <br />
            <button onClick = {() => {counterValue[1](0)}}>Reset</button>
        </div>
    );
}

export default Child;