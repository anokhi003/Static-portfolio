'use client';
import React, { MouseEvent } from 'react';
import "./button.scss";

interface ButtonProps {
  btnText: string;
  btnStyle: 'PRIMARY' | 'SECONDARY' | 'BASE-TRANSPARENT'; 
  btnType?: 'button' | 'submit' | 'reset';
  onClick?: (event: MouseEvent<HTMLButtonElement>) => void;
  className?: string;
  disabled?: boolean;
  contentClass?: string;
}

const Button: React.FC<ButtonProps> = ({ btnText,
  btnStyle,
  btnType,
  onClick,
  className,
  disabled,contentClass ="" }) => {


  return (
    <div id="button-container" className={`${className ? className : ""}`}>
      <button
        className={`btn-block ${btnStyle ? btnStyle : "PRIMARY"}  `}
        onClick={onClick}
        type={btnType || "button"}
        disabled={disabled}
      >
        <span className={`flex justify-center items-center gap-2 font-adlam ${contentClass}`}>
          {btnText && <span>{btnText}</span>}
        </span>
      </button>
    </div>
  );
};

export default Button;
