import React, { ReactNode } from 'react';

const Heading: React.FC<{ children: ReactNode }> = ({ children }) => {
  return <h1>{children}</h1>;
};

export default Heading;
