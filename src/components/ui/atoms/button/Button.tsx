import React from 'react'

type BtnType = 'button' | 'submit' | 'reset'

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    type: BtnType;
    onClick?: () => void;
    children: React.ReactNode;
    className?: string;
}

function Button({type, onClick, children, ...props}: ButtonProps) {
  return (
    <button type={type} onClick={onClick} {...props}>
      {children}
    </button>
  )
}

export default Button