import React from 'react'

export default function Result({score, playAgain}) {
    return (
        <div className="scoreBoard">
            <h2 className="score">
                You got {score} / 5 correct answers
            </h2>
            <button 
                className="playBtn"
                onClick={playAgain}
            >
                Play Again?
            </button>
        </div>
    )
}
