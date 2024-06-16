import React from 'react';
import '../styles/CounterDisplay.css'

function CounterDisplay({ count }) {
    return (
        <div className='pratique-counter'>
            {count}
        </div>
    );
}
export default CounterDisplay