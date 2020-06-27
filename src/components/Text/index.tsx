import React, { FC, ReactNode } from 'react';

interface ButtonProps {
  children: ReactNode;
}

const Button: FC<ButtonProps> = ({ children }) => {
  return <h1>{children}</h1>;
};

export default Button;
