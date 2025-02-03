import React, { ReactNode } from 'react';

const Body: React.FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <div className="text-center p-8">{children}</div>
  );
};

export default Body;
