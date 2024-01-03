import "./Modal.css";
const Modal = ({ shuffle, turns }) => {
  return (
    <div className="modal-background">
      <div className="modal">
        <h2>Zagraj ponownie</h2>
        <h3>Skonczyłeś gre, wykonując {turns} ruchów</h3>
        <button onClick={shuffle}>Nowa gra</button>
      </div>
    </div>
  );
};

export default Modal;
