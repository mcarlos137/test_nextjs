import React, { ReactNode } from 'react';

const Body: React.FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <div className="flex w-full px-8" data-testid="order-book">{children}</div>
  );
};

export default Body;
