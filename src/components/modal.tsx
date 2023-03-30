const Modal = () => {
  return (
    <div className="modal">
      <div className="modal__header">Modal title</div>
      <div className="modal__main">This is modal content</div>
      <div className="modal__footer">
        <button className="modal__footer__btn">Close</button>
      </div>
    </div>
  );
};

export default Modal;
