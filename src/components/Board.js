import React from 'react';
import { useState } from 'react';
import { checkEnd } from '../utils/checkEnd';
import { generateCards } from '../utils/generateCards';
import Card from './Card';
import ScoreBoard from './ScoreBoard';

const Board = () => {

    const [cards, setCards] = useState(generateCards());
    const [cardSelected, setCardcardSelected] = useState(null);
    const [attempts, setAttempts] = useState(0);
    const [finished, setFinished] = useState(false);
    const [points, setPoints] = useState(0);
    // avoid double click
    const [canPlay, setCanPlay] = useState(true);

    const handleClick = (card) => {
        if (canPlay === true) {
            card.flipped = true;
            if (cardSelected === null) {
                setCardcardSelected(card);
            } else {
                // Can't click another card
                setCanPlay(false);

                setAttempts(attempts + 1);
                if (card.fruit === cardSelected.fruit) {
                    card.matched = true;
                    cardSelected.matched = true;
                    setCardcardSelected(null);
                    setPoints(points + 3);
                    // let them click another card
                    setCanPlay(true);

                } else {
                    setPoints(points - 1);
                    // small delay to show the card
                    setTimeout(() => {
                        card.flipped = false;
                        cardSelected.flipped = false;
                        setCardcardSelected(null);
                        setCanPlay(true);
                    }, 1000);
                }
            }
            setFinished(checkEnd(cards));
        }

    }
    const resetGame = () => {
        setCards(generateCards());
        setCardcardSelected(null);
        setAttempts(0);
        setFinished(false);
        setPoints(0);
    }

    if (finished) {
        return (
            <div className="App">
                <h1>You win!</h1>
                <ScoreBoard attempts={attempts} points={points} />
                <button onClick={() => resetGame()} className='button'>Restart</button>
            </div>
        );
    }

    return (

        <div className="App">
            <div className='wrapper_score_board'>
                <ScoreBoard attempts={attempts} points={points}></ScoreBoard>
            </div>
            <div className="board">
                {cards.map((card, index) => {
                    return (
                        <Card card={card} onHandleClick={card => handleClick(card)} key={index} />
                    );
                })}
            </div>
        </div>
    )

}

export default Board