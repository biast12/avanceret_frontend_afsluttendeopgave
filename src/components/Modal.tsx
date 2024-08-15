import { useState, useCallback, useEffect } from "react";
import simpleFetch from "@/hooks/fetch";

const Modal: React.FC<ModalProps> = ({ show, email, onClose }) => {
  const [modalMaxWords, setModalMaxWords] = useState(50);
  const [wordCount, setWordCount] = useState(0);
  const [message, setMessage] = useState("");
  const [formData, setFormData] = useState({
    to: "",
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  
  useEffect(() => {
    const words = message.split(/\s+/);
    setWordCount(words.length);
  }, [message]);

  const handleWordCount = useCallback(
    (value: string) => {
      const words = value.split(/\s+/);
      if (words.length > modalMaxWords) {
        value = words.slice(0, modalMaxWords).join(" ");
      }
      setMessage(value);
      setFormData((prevData) => ({ ...prevData, message: value }));
    },
    [modalMaxWords]
  );

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name.toLowerCase()]: value }));
  };

  const handleSubmit = async(e: React.FormEvent) => {
    e.preventDefault();
    const dataToSend = { ...formData, to: email };
    const { data, error } = await simpleFetch<ExpectedResponseType>(process.env.NEXT_PUBLIC_HOST + "/api/data", "POST", dataToSend);
    if (error) {
      console.log("Error: ", error);
      return;
    }
    console.log("Data: ", data);
    onClose();
  };

  if (!show) {
    return null;
  }

  return (
    <div className="fixed inset-0 z-10 overflow-y-auto">
      <div
        className="fixed inset-0 bg-black opacity-50"
        onClick={onClose}
        aria-hidden="true"
      ></div>
      <div className="flex items-center justify-center min-h-screen px-4 pt-4 pb-20 text-center sm:block sm:p-0">
        <div
          className="inline-block w-2/5 px-16 py-8 overflow-hidden text-left align-middle transition-all transform bg-white rounded-lg shadow-xl sm:my-8 sm:align-middle"
          role="dialog"
          aria-modal="true"
          aria-labelledby="modal-headline"
        >
          <div className="relative">
            <button onClick={onClose} aria-label="Close">
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
              <EmailForm
                handleWordCount={handleWordCount}
                wordCount={wordCount}
                modalMaxWords={modalMaxWords}
                handleChange={handleChange}
                handleSubmit={handleSubmit}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const EmailForm: React.FC<EmailFormProps> = ({
  handleWordCount,
  wordCount,
  modalMaxWords,
  handleChange,
  handleSubmit,
}) => (
  <form className="w-full text-center sm:text-left" onSubmit={handleSubmit}>
    <div className="mb-4">
      <label
        className="block mb-2 text-sm font-bold text-gray-700"
        htmlFor="name"
      >
        Name
      </label>
      <input
        type="text"
        name="Name"
        id="name"
        placeholder="Enter your name"
        className="w-full px-3 py-2 mb-3 text-gray-700 border rounded-lg focus:outline-none focus:shadow-outline"
        onChange={handleChange}
      />

      <label
        className="block mb-2 text-sm font-bold text-gray-700"
        htmlFor="email"
      >
        Email
      </label>
      <input
        type="email"
        name="Email"
        id="email"
        placeholder="Enter your email"
        className="w-full px-3 py-2 mb-3 text-gray-700 border rounded-lg focus:outline-none focus:shadow-outline"
        onChange={handleChange}
      />

      <label
        className="block mb-2 text-sm font-bold text-gray-700"
        htmlFor="subject"
      >
        Subject
      </label>
      <input
        type="text"
        name="Subject"
        id="subject"
        placeholder="Enter the subject"
        className="w-full px-3 py-2 mb-3 text-gray-700 border rounded-lg focus:outline-none focus:shadow-outline"
        onChange={handleChange}
      />

      <label
        className="block mb-2 text-sm font-bold text-gray-700"
        htmlFor="message"
      >
        Message
      </label>
      <textarea
        name="Message"
        id="message"
        rows={10}
        placeholder="Enter your message"
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
);

export default Modal;