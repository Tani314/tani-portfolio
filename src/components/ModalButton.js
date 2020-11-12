import React from "react";
import { OpenModalButton } from "../styles/modal";



const animatedOpenButton = ({ children, handleClick }) => {
  return (
    <OpenModalButton
      onClick={handleClick}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
    >
      {children}
    </OpenModalButton>
  );
};

export default animatedOpenButton;
