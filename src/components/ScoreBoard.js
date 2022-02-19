import React from 'react'

function ScoreBoard({ attempts, points }) {
    return (
        <div className="score_board">
            <div className='score_left'>
                Attempts: <span>{attempts}</span>
            </div>
            <div className="score_right">
                Points: <span>{points}</span>
            </div>
        </div>
    )
}

export default ScoreBoard