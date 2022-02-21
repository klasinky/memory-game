import React from 'react';
import { useState } from 'react';
import { checkEnd } from '../utils/checkEnd';
import { generateCards } from '../utils/generateCards';
import Card from './Card';
import ScoreBoard from './ScoreBoard';
import Win from './Win';

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
                <Win attempts={attempts} points={points} handleClick={() => resetGame()}></Win>
            </div>
        );
    }

    return (

        <div >
            <ScoreBoard attempts={attempts} points={points} onHandleClick={() => resetGame()}></ScoreBoard>
            <div className="wrapper_board">
                <div className="board">
                    {cards.map((card, index) => {
                        return (
                            <Card card={card} onHandleClick={card => handleClick(card)} key={index} />
                        );
                    })}
                </div>
            </div>
            <div className='wrapper_button'>
            <button onClick={() => resetGame()} className='button'>Restart</button>

            </div>
        </div>
    )

}

export default Board