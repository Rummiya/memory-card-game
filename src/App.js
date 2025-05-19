import './App.scss';
import {  useEffect, useState } from 'react';
import initialCards from './data/initialCard';
import Board from './components/board/Board';
import GameInfo from './components/gameInfo/GameInfo';
import WinMsg from './components/winMsg/WinMsg';

function App() {
  const [cards, setCards] = useState(initialCards);
  const [flippedCards, setFlippedCards] = useState([]);
  const [matchedCards, setMatchedCards] = useState([]);
  const [isDisabled, setIsDisabled] = useState(false);

  useEffect(() => {
    setCards(shuffleCards(cards))
  }, [])

  useEffect(() => {
    if (flippedCards.length === 2) {
      setIsDisabled(true);
      const [first, second] = flippedCards;

      if (cards[first].image === cards[second].image) {
        setMatchedCards([...matchedCards, first, second]);
        setFlippedCards([]);
        setIsDisabled(false)
      } else {
        setTimeout(() => {
          const newCards = cards.map((card, index) => {
            if (index === first || index === second) {
              card.isFlipped = false;
            }
            return card;
          })
          setCards(newCards);
          setFlippedCards([]);
          setIsDisabled(false)
        }, 1000)
      }
    }
  }, [cards, flippedCards, matchedCards])

  const handleCardClick = (index) => {
    if (
      isDisabled || 
      flippedCards.includes(index) || 
      matchedCards.includes(index)
    ) return;

    const newCards = cards.map((card, i) => {
      if (i === index) {
        card.isFlipped = true;
      }
      return card
    });

    setCards(newCards);
    setFlippedCards([...flippedCards, index])
  }

  const restart = () => {
    const resetCards = initialCards.map((card) => ({...card, isFlipped: false}))
    setCards(shuffleCards(resetCards));
    setFlippedCards([]);
    setMatchedCards([]);
    setIsDisabled(false);

    cards.map(card => {
      return card.isFlipped = false
    })
  }

  const shuffleCards = (cards) => {
    return cards.sort(() => Math.random() - 0.5);
  }

  if (matchedCards.length === 12) {
    const body = document.querySelector('body').style.overflow = 'hidden'
  } else {
    const body = document.querySelector('body').style.overflow = 'auto'
  }

  return (
    <div className="App">
        <h1>Memory Card Game</h1>
        <GameInfo matchedCards={matchedCards} onBtnClick={restart} />
        <Board cards={cards} onCardClick={handleCardClick} />
        {matchedCards.length === 12 && <WinMsg onBtnClick={restart}/>}
    </div>
  );
}

export default App;
