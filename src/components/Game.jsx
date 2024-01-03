import { useEffect, useState } from "react";
import "./Game.css";
import Card from "./Card";
import Info from "./Info";
import Modal from "./Modal";

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
  const [win, setWin] = useState(false);
  const shuffle = () => {
    setDisabled(false);
    const shuffleCards = [...images, ...images]
      .sort(() => Math.random() - 0.5)
      .map((card) => {
        return { ...card, id: Math.random(), selected: false };
      });
    setCards(shuffleCards);
    setTurns(0);
    setWin(false);
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
    if (firstChoice && secondChoice) {
      setDisabledCards(true);
      setTimeout(() => {
        setFirstChoice(null);
        setSecondChoice(null);
        setDisabledCards(false);
      }, 500);
      setCards((cards) => {
        return cards.map((card) => {
          if (card.src === firstChoice.src && card.src === secondChoice.src) {
            return { ...card, selected: true };
          } else {
            return card;
          }
        });
      });
      setTurns((num) => num + 1);
    }
  }, [firstChoice, secondChoice]);
  useEffect(() => {
    if (cards.length > 0) {
      const selectedCards = cards.filter((card) => card.selected);
      if (selectedCards.length === cards.length) {
        setWin(true);
      }
    }
  }, [cards]);
  return (
    <div className="game">
      {!disabled && (
        <div className="board">
          {cards.map((card) => (
            <Card
              card={card}
              key={card.id}
              firstChoice={firstChoice}
              secondChoice={secondChoice}
              selectImage={selectImage}
              disabledCards={disabledCards}
            />
          ))}
        </div>
      )}
      <Info disabled={disabled} turns={turns} shuffle={shuffle} />
      {win && <Modal shuffle={shuffle} turns={turns} />}
    </div>
  );
};

export default Game;
