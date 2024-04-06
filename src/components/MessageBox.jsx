import React, { useState } from "react";
import Modelform from "./Modelform";

const MessageBox = ({ onClose }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  return (
    <>
      <div className="fixed bottom-5 right-0 lg:right-5 z-50">
        <div className=" hidden sm:block cursor-pointer w-56 p-5 bg-white shadow-lg opacity-100">
          <div>
            <div>
              <button
                onClick={onClose}
                className="absolute top-0 right-0 mt-2 mr-2 text-gray-500"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M3.293 3.293a1 1 0 0 1 1.414 0L10 8.586l5.293-5.293a1 1 0 1 1 1.414 1.414L11.414 10l5.293 5.293a1 1 0 0 1-1.414 1.414L10 11.414l-5.293 5.293a1 1 0 0 1-1.414-1.414L8.586 10 3.293 4.707a1 1 0 0 1 0-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>
              <p className="text-sm leading-tight">
                Hi, let’s connect on helping you with your property needs.
              </p>
              <button
                onClick={toggleModal}
                className="mt-3 rounded bg-black px-4 py-1.5 text-sm text-white"
              >
                Message Maninder
              </button>
            </div>
          </div>
        </div>

        <div className="flex justify-end mt-4">
          <img
            onClick={toggleModal}
            className="w-16 h-16 object-fill rounded-full "
            src="https://crm.artechworld.tech/images/faces/facemaninder.png"
            alt=""
          />
        </div>
      </div>

      {isModalOpen && (
        <div
          id="crud-modal"
          className="overflow-y-auto overflow-x-hidden fixed top-0 right-0 z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full"
        >
          <div className="absolute right-0 p-4 w-full max-w-md max-h-full">
            <div className="relative bg-white rounded-lg shadow">
              <div className="flex items-center justify-between p-4 rounded-t dark:border-gray-600">
                <button
                  onClick={toggleModal}
                  type="button"
                  className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center"
                >
                  <svg
                    className="w-3 h-3"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 14 14"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                    />
                  </svg>
                  <span className="sr-only">Close modal</span>
                </button>
              </div>
              <Modelform />
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default MessageBox;
