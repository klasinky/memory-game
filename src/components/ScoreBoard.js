import React from 'react'

function ScoreBoard({ attempts, points, onHandleClick, showButton=true }) {
    return (
        <div className="score_board">
            <div className='score_left'>
                Attempts: <span>{attempts}</span>
            </div>
            {showButton && <div className='score_button'>
                <button onClick={() => onHandleClick()} className='button'>Restart</button>
            </div>}

            <div className="score_right">
                Points: <span>{points}</span>
            </div>
        </div>
    )
}

export default ScoreBoard