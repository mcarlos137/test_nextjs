import React, { ReactNode } from 'react';

const Container: React.FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <div className="min-h-screen min-w-screen bg-black text-white text-sm">
      {children}
    </div>
  );
};

export default Container;
