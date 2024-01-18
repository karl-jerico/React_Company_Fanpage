import { MouseEventHandler } from "react";

interface CustomButtonProps {
  title: string;
  buttonStyle?: string;
  handleClick?: MouseEventHandler<HTMLButtonElement>;
}

const CustomButton = ({ title, buttonStyle, handleClick }: CustomButtonProps) => (
    <button className={`custom-btn ${buttonStyle}`} onClick={handleClick}>
      {title}
    </button>
  );
  
export default CustomButton;
