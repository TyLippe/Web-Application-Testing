import React from 'react';

const Display = props => {
    console.log(props)
    return (
        <div className='scoreboard'>
            <h1>Pitch Count</h1>
            <h1>{props.balls}</h1>
            <h2>BALLS</h2>
            <h1>{props.strikes}</h1>
            <h2>STRIKES</h2>
        </div>
    )
}

export default Display;
