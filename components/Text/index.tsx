import React, { FC, ReactNode } from 'react'
import style from './button.module.scss'

interface ButtonProps {
    children: ReactNode;

    /**
     * Tipo do botão, padrão HTML5
     * @default "button"
     **/
    type?: 'submit' | 'reset' | 'button';
}

const Button: FC<ButtonProps> = ({children, type}) => {
    return <button className={style['button']} type={type || 'button'}>{children}</button>
}

export default Button;
