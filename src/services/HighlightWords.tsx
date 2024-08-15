import React from "react";

const HighlightWords: React.FC<HighlightWordsProps> = ({ text, className }) => {
  const words = text.split(" ");
  const wordCount = 4;
  const highlightedWords = words.slice(-wordCount).join(" ");
  const remainingWords = words.slice(0, -wordCount).join(" ");

  return (
    <>
      {remainingWords} <span className={className}>{highlightedWords}</span>
    </>
  );
};

export default HighlightWords;
