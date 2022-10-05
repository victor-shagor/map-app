import React from "react";
import ClipLoader from "react-spinners/ClipLoader";

const Button = ({ text, onClick, isLoading = false }) => {
  return (
    <button
      type="submit"
      onClick={onClick}
      disabled={isLoading}
      className="btn"
    >
      {!isLoading ? text : <ClipLoader color="white" size={35} />}
    </button>
  );
};

export default Button;
