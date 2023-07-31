import React, { useEffect, useState } from "react";
import "./Game.css";
import Card from "./Card";
import Info from "./Info";
const images = [
  { src: "image1.png" },
  { src: "image2.png" },
  { src: "image3.png" },
  { src: "image4.png" },
  { src: "image5.png" },
  { src: "image6.png" },
];

const Game = () => {
  const [cards, setCards] = useState([]);
  const [turns, setTurns] = useState(0);
  const [firstChoice, setFirstChoice] = useState(null);
  const [secondChoice, setSecondChoice] = useState(null);
  const [disabled, setDisabled] = useState(true);
  const [disabledCards, setDisabledCards] = useState(false);
  const shuffle = () => {
    setDisabled(false);
    const shuffleCards = [...images, ...images]
      .sort(() => Math.random() - 0.5)
      .map((card) => ({ ...card, id: Math.random(), selected: false }));
    setCards(shuffleCards);
    setTurns(0);
  };
  const selectImage = (selectedCard) => {
    !firstChoice
      ? setFirstChoice({
          id: selectedCard.id,
          src: selectedCard.src,
        })
      : setSecondChoice({
          id: selectedCard.id,
          src: selectedCard.src,
        });
  };
  useEffect(() => {
    // console.log(cards);
    // console.log(firstChoice, secondChoice);
    if (firstChoice && secondChoice) {
      setDisabledCards(true);
      setTimeout(() => {
        setFirstChoice(null);
        setSecondChoice(null);
        setDisabledCards(false);
      }, 500);
      const newCards = cards.map((card) => {
        if (card.src === firstChoice.src && card.src === secondChoice.src) {
          return { ...card, selected: true };
        } else {
          return card;
        }
      });
      setCards(newCards);

      setTurns((num) => num + 1);
    }
  }, [firstChoice, secondChoice]);
  return (
    <div className="game">
      {!disabled && (
        <div className="board">
          {cards.map((card) => (
            <Card
              card={card}
              firstChoice={firstChoice}
              secondChoice={secondChoice}
              selectImage={selectImage}
              disabledCards={disabledCards}
            />
          ))}
        </div>
      )}
      <Info disabled={disabled} turns={turns} shuffle={shuffle} />
    </div>
  );
};

export default Game;
