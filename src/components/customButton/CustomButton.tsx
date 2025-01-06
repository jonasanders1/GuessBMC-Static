import "../../styles/forms.css";
import "./customButton.css";
interface CustomButtonProps {
  text: string;
  onClick: () => void;
  icon?: React.ReactNode;
  iconPosition?: "left" | "right";
  buttonColor?: string;
  hoverColor?: string;
}

const CustomButton: React.FC<CustomButtonProps> = ({
  text,
  onClick,
  icon,
  iconPosition = "right",
  buttonColor = "var(--shade-1)",
}) => {
  return (
    <button
      className="custom-button"
      onClick={onClick}
      style={{ backgroundColor: buttonColor}}
    >
      {icon && iconPosition === "left" && icon}
      {text}
      {icon && iconPosition === "right" && icon}
    </button>
  );
};

export default CustomButton;
