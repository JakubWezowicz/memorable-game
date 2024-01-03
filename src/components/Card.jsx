const coverImage = {
  src: "cover.png",
};

const Card = ({
  card,
  selectImage,
  firstChoice,
  secondChoice,
  disabledCards,
}) => {
  return (
    <div className="card">
      {firstChoice?.id === card.id ||
      secondChoice?.id === card.id ||
      card.selected ? (
        <>
          <img src={card.src} alt="uncoverd card image" />
        </>
      ) : (
        <img
          src={coverImage.src}
          alt="coverd card image"
          key={card.id}
          id={card.id}
          onClick={
            !disabledCards
              ? () => {
                  selectImage(card);
                }
              : () => {
                  return;
                }
          }
        />
      )}
    </div>
  );
};

export default Card;
