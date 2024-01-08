import React, { ReactNode } from 'react';

interface ButtonProps {
  children: ReactNode;
  onClick: () => void;
  className?: string;
}

const Button: React.FC<ButtonProps> = ({ children, onClick, className }) => {
    return (
      <button
        className={`bg-blue-500 text-white px-4 py-2 rounded focus:outline-none focus:shadow-outline-blue ${className}`}
        onClick={onClick}
      >
        {children}
      </button>
    );
  };

export default Button;