import React, { FC, ReactNode } from 'react';
import { css } from '../../util/style';

interface ButtonProps {
  children: ReactNode;

  /**
   * Tipo do botão, padrão HTML5
   * @default "submit"
   * */
  type?: 'submit' | 'reset' | 'button';
}

const Button: FC<ButtonProps> = ({ children, type }) => {
  return (
    <button
      className={css(['p4', 'button'])}
      // className={css(['button', 'p4'])}
      /* eslint-disable-next-line react/button-has-type */
      type={type || 'submit'}
    >
      {children}
    </button>
  );
};

export default Button;
