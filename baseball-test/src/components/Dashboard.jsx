import React, { useState} from 'react';

export const addBall = (currentBalls) => {
    if(currentBalls === 4) {
        return 0;
    } else {
        return currentBalls + 1
    }
};

export const addStrike = (currentStrikes) => {
    if (currentStrikes === 3) {
        return 0;
    } else {
        return currentStrikes + 1;
    }
}

function Dashboard() {
    const [balls, setBalls] = useState(0);
    const [strikes, setStrikes] = useState(0);

    return(
        <div className='dashboard'>
            <h1>{balls}</h1>
            <button onClick={() => setBalls(addBall(balls))}>BALL</button>
            <h2>{strikes}</h2>
            <button onClick={() => setStrikes(addStrike(strikes))}>STRIKE</button>
        </div>
    )
}

export default Dashboard;