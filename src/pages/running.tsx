import React, { useState } from "react";
import ModalComponent from "../components/modalcomponent";

const Running = () => {
  const { isModalOpen, setIsModalOpen } = useState<boolean>(false);
  const Modal = ({ isOpen = false, onCloseRequest }) => {
    if (!isOpen) {
      return null;
    }

    return (
      <div className="container">
        <button
          type="button"
          onClick={() => setIsModalOpen(true)}
          className="btn"
        >
          100 Meters
        </button>
        <ModalComponent
          isOpen={isModalOpen}
          onCloseRequest={onModalCloseRequest}
        />
      </div>
    );
  };
};
export default Running;
