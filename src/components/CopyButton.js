import React, { useState } from 'react';
import "../CSS/Short.css";

const CopyButton = ({ textToCopy }) => {
  const [isCopied, setIsCopied] = useState(false);

  const handleCopyClick = () => {
    try {
      navigator.clipboard.writeText(textToCopy);
      setIsCopied(true);
    } catch (err) {
      console.error('Failed to copy text: ', err);
    }
  };

  return (
    <div>
      <button className='click' onClick={handleCopyClick}>Copy</button>
    </div>
  );
};

export default CopyButton;
