import React, { useState } from "react";
import Modal from "react-modal";

Modal.setAppElement("#root");

export const FreeLesson = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const openModal = () => {
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  return (
    <div className="flex justify-center items-center bg-[rgb(17,17,17)] h-[20vh]">
      <button
        onClick={openModal}
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold "
      >
        Видеону ачуу
      </button>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        className="fixed inset-0 bg-black bg-opacity-75 flex justify-center items-center"
        overlayClassName="fixed inset-0 bg-black bg-opacity-50"
      >
        <div className="relative bg-black p-6 w-full max-w-4xl h-full md:h-auto">
          <iframe
            width="100%"
            height="450px"
            src="https://www.youtube.com/embed/HcsFMGJQezI"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
          <button
            onClick={closeModal}
            className="absolute top-3 right-3 bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
          >
            Жабуу
          </button>
        </div>
      </Modal>
    </div>
  );
};
