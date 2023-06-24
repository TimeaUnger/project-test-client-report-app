import React from "react";
import '../../styles/common/button.css'

interface Props {
  children?: React.ReactNode;
  onClick: () => void;
  action: string;
}

const Button: React.FC<Props> = ({ 

    children,
    onClick, 
    action

  }) => { 
  return (
    <button 
      onClick={onClick}
      className={action}
    >
    {children}
    </button>
  );
}

export default Button;
