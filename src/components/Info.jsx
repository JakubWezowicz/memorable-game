const Info = ({ disabled, turns, shuffle }) => {
  return (
    <>
      {!disabled ? (
        <div className="info enabledGame">
          {!disabled && <p>RUNDA: {turns}</p>}
          <button onClick={shuffle}>Reset game</button>
        </div>
      ) : (
        <div className="info disabledGame">
          <button onClick={shuffle}>New game</button>
        </div>
      )}
    </>
  );
};

export default Info;
