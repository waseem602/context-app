import React, { useState } from 'react';
import './App.css';
import counterContext from './counterContext';
import Parent from './Parent';

function App() {
    let countState = useState(1)
    return ( 
        <counterContext.Provider value = {countState}>
            <div>
                <Parent/ >
            </div>
        </counterContext.Provider>
    );
}
    
export default App;