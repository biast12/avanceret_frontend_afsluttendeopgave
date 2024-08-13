"use client";
import { useState, useCallback } from "react";

const Modal: React.FC<ModalProps> = ({ show, email, onClose }) => {
  if (!show) {
    return null;
  }
  const [modalMaxWords, setModalMaxWords] = useState(50);
  const [wordCount, setWordCount] = useState(0);

  const handleWordCount = useCallback((value: string) => {
    const words = value.split(/\s+/);
    if (words.length > modalMaxWords) {
      value = words.slice(0, modalMaxWords).join(" ");
    }
    setWordCount(words.length);
  }, []);

  return (
    <div className="fixed inset-0 z-10 overflow-y-auto">
      <div
        className="fixed inset-0 bg-black opacity-50"
        onClick={onClose}
      ></div>{" "}
      {/* Black shadow background */}
      <div className="flex items-center justify-center min-h-screen px-4 pt-4 pb-20 text-center sm:block sm:p-0">
        <div
          className="inline-block w-2/5 px-16 py-8 overflow-hidden text-left align-middle transition-all transform bg-white rounded-lg shadow-xl sm:my-8 sm:align-middle"
          role="dialog"
          aria-modal="true"
          aria-labelledby="modal-headline"
        >
          <div className="relative">
            <button onClick={onClose}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="absolute top-0 right-0 w-6 h-6 mt-2 mr-2 text-gray-700 cursor-pointer"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
            <div className="px-4 pt-5 pb-4 bg-white sm:p-6 sm:pb-4">
              <h2 className="mb-4 text-2xl font-medium leading-6 text-center text-gray-900">
                Send an email to {email}
              </h2>

              <form className="w-full text-center sm:text-left">
                <div className="mb-4">
                  <label className="block mb-2 text-sm font-bold text-gray-700">
                    Name
                  </label>
                  <input
                    type="text"
                    name="Name"
                    className="w-full px-3 py-2 mb-3 text-gray-700 border rounded-lg focus:outline-none focus:shadow-outline"
                  />
                  <label className="block mb-2 text-sm font-bold text-gray-700">
                    Email
                  </label>
                  <input
                    type="email"
                    name="Email"
                    className="w-full px-3 py-2 mb-3 text-gray-700 border rounded-lg focus:outline-none focus:shadow-outline"
                  />
                  <label className="block mb-2 text-sm font-bold text-gray-700">
                    Subject
                  </label>
                  <input
                    type="text"
                    name="Subject"
                    className="w-full px-3 py-2 mb-3 text-gray-700 border rounded-lg focus:outline-none focus:shadow-outline"
                  />
                  <label className="block mb-2 text-sm font-bold text-gray-700">
                    Message
                  </label>
                  <textarea
                    name="WordCount"
                    rows={10}
                    className="w-full px-3 py-2 mb-3 text-gray-700 border rounded-lg focus:outline-none focus:shadow-outline"
                    onChange={(e) => handleWordCount(e.target.value)}
                  />
                </div>
                <p className="mt-2 text-sm text-gray-500">
                  {wordCount}/{modalMaxWords} words
                </p>

                <div className="mb-4 text-right">
                  <button
                    type="submit"
                    className="px-4 py-2 font-bold text-white bg-orange-500 rounded hover:bg-orange-700 focus:outline-none focus:shadow-outline"
                  >
                    Submit
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
