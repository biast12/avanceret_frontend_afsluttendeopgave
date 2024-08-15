declare type ModalProps = {
  show: boolean;
  email: string;
  onClose: () => void;
};

declare type EmailFormProps = {
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleWordCount: (value: string) => void;
  handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
  wordCount: number;
  modalMaxWords: number;
};

declare type POSTData = {
  to: string;
  name: string;
  email: string;
  subject: string;
  message: string;
};

declare type ExpectedResponseType = {
  id: number;
  message: string;
};

declare type DataFrontItem = {
  currentPage: number;
  href: string;
  src: string;
};

declare type DataItem = {
  currentPage: number;
  img_src: string;
  title: string;
  text1: string;
  text2: string;
  text3: string;
  text_bottom: string;
};

declare type EmailItem = {
  src: string;
  email: string;
};

declare type DataNavItem = {
  href: string;
  src: string;
};

declare type NavProps = {
  page: number;
};

declare type HighlightWordsProps = {
  text: string;
  className: string;
};
