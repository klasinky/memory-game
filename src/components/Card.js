import React, { useEffect, useState } from 'react';

function Card({ card, onHandleClick }) {
  const [flipped, setFlipped] = useState(card.flipped);
  const [matched, setMatched] = useState(card.matched);
  const urlImg = `${process.env.PUBLIC_URL}/images/${card.fruit}.png`;
  const handleClick = () => {
    if (!card.flipped && !card.matched) {
      onHandleClick(card);
    }

  }
  useEffect(() => {
    setFlipped(card.flipped);
    setMatched(card.matched);
  }, [card.flipped, card.matched])

  return (
    <div onClick={() => handleClick()} className={"card " + (flipped ? "flipped" : "") + (matched?" matched":"")}>
      <div className="card-front">
        {flipped?<img src={urlImg} alt={card.fruit} />:""}
      </div>
    </div>
  );
}

export default Card;
