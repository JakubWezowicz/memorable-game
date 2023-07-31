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
          <img src={card.src} key={card.id} id={card.id} />
        </>
      ) : (
        <img
          src={coverImage.src}
          alt="cover image"
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
