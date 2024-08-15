declare type ModalProps = {
  show: boolean;
  email: string;
  onClose: () => void;
};

declare type EmailFormProps = {
  handleWordCount: (value: string) => void;
  wordCount: number;
  modalMaxWords: number;
};

declare type DataItem = {
  currentPage: number;
  img_src: string;
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
}