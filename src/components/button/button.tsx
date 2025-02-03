import React, { ReactNode } from 'react';

const Button: React.FC<{ children: ReactNode, onClick: () => void }> = ({ children, onClick }) => {
  return (
    <button
      onClick={onClick}
      className="bg-purple-700 py-4 px-8 rounded font-bold hover:bg-purple-800 active:bg-purple-900">
      {children}
    </button>
  );
};

export default Button;
