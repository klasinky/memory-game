export function checkEnd(cards) {
    let finished = true;
    cards.forEach(card => {
        if (!card.matched) {
            finished = false;
        }
    });

    return finished;
}