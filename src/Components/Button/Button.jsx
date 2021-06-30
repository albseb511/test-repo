import React from "react";

const Button = ({ label, color, handleClick }) => {
  const style = { backgroundColor: color };
  return (
    <div style={style} data-testid="btn-basic" onClick={handleClick}>
      {label}
    </div>
  );
};

export default Button;
