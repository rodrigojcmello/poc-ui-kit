import React, { FC, ReactNode } from 'react'
import sButton from './button.module.scss'
import sMain from '../main.module.scss'

interface ButtonProps {
    children: ReactNode;

    /**
     * Tipo do botão, padrão HTML5
     * @default "button"
     **/
    type?: 'submit' | 'reset' | 'button';
}

const Button: FC<ButtonProps> = ({children, type}) => {
    return <button className={[sButton['button'], sMain['p4']].join(' ')} type={type || 'button'}>{children}</button>
}

export default Button;
