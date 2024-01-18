import { CustomButtonProps } from "../types";

const CustomButton = ({ title, buttonStyle, handleClick }: CustomButtonProps) => (
    <button className={`custom-btn ${buttonStyle}`} onClick={handleClick}>
      {title}
    </button>
  );
  
export default CustomButton;
