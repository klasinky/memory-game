import React from 'react'
import ScoreBoard from './ScoreBoard'

const Win = ({attempts, points, handleClick}) => {
  const urlImg = `${process.env.PUBLIC_URL}/images/trophy.png`;

    return (
        <div>
            <ScoreBoard showButton={false} attempts={attempts} points={points} />
            <img className='trophy' src={urlImg} alt="trophy" />
            <h1 className='text-success'>You win!</h1>
            <button onClick={() => handleClick()} className='button'>Restart</button>
        </div>
    )
}

export default Win