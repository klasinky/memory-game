export function generateCards() {
    let cards = _data();
    cards.push(..._data());
    // shuffle cards
    cards = shuffle(cards);
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

function shuffle(array) {
    // from https://stackoverflow.com/questions/2450954/how-to-randomize-shuffle-a-javascript-array
    let currentIndex = array.length,  randomIndex;
  
    // While there remain elements to shuffle...
    while (currentIndex !== 0) {
  
      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;
  
      // And swap it with the current element.
      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex], array[currentIndex]];
    }
  
    return array;
  }
  