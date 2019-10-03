import React from 'react';

const Display = props => {
    return (
        <div className='scoreboard'>
            <h1>Pitch Count</h1>
            <h2>{props.balls}</h2>
            <h2>{props.strikes}</h2>
        </div>
    )
}

export default Display;
