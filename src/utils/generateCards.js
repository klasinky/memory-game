
export function generateCards() {
    let cards = _data();
    cards.push(..._data());
    return cards;
}

function _data() {
    return [
        { fruit: 'Apple', matched: false, flipped: false},
        { fruit: 'Orange', matched: false, flipped: false },
        { fruit: 'Kiwi', matched: false, flipped: false },
        { fruit: 'Lemon', matched: false, flipped: false },
        { fruit: 'Banana', matched: false, flipped: false },
        { fruit: 'Mango', matched: false, flipped: false },
        { fruit: 'Pineapple', matched: false, flipped: false },
        { fruit: 'Strawberry', matched: false, flipped: false },
        { fruit: 'Watermelon', matched: false, flipped: false },
        { fruit: 'Cherry', matched: false, flipped: false },
    ]
}