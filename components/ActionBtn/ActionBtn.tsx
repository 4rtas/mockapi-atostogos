import React from "react";
import styles from "./ActionBtn.module.css";

type ButtonType = {
  text: string;
  onClick: () => void;
};

const ActionButton: React.FC<ButtonType> = ({ text, onClick }) => {
  return (
    <button onClick={onClick} className={styles.main}>
      {text}
    </button>
  );
};
export default ActionButton;
