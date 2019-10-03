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

export const addFoul = (currentStrikes) => {
    if (currentStrikes === 2) {
        return currentStrikes + 0;
    } else {
        return currentStrikes + 1;
    }
}

export const addHit = (currentBalls, currentStrikes) => {
        currentBalls(0)
        currentStrikes(0)
}

function Dashboard() {
    const [balls, setBalls] = useState(0);
    const [strikes, setStrikes] = useState(0);

    return(
        <div className='dashboard'>
            <h1>{balls}</h1>
            <h2>Balls</h2>
            <h1>{strikes}</h1>
            <h2>Strikes</h2>
            <button onClick={() => setBalls(addBall(balls))}>BALL</button>
            <button onClick={() => setStrikes(addStrike(strikes))}>STRIKE</button>
            <button onClick={() => setStrikes(addFoul(strikes))}>FOUL</button>
            <button onClick={() => addHit(setBalls, setStrikes)}>HIT</button>
        </div>
    )
}

export default Dashboard;