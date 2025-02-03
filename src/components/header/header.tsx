import React, { ReactNode } from 'react';

const Header: React.FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <>{children}</>
  );
};

export default Header;
