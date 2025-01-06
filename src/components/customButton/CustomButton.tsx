import "../../styles/forms.css";
import "./customButton.css";
interface CustomButtonProps {
  text: string;
  onClick: () => void;
  icon?: React.ReactNode;
  iconPosition?: "left" | "right";
  buttonColor?: string;
  hoverColor?: string;
  flex?: boolean;
}

const CustomButton: React.FC<CustomButtonProps> = ({
  text,
  onClick,
  icon,
  iconPosition = "right",
  buttonColor = "var(--shade-1)",
  flex = true,
}) => {
  return (
    <button
      className="custom-button"
      onClick={onClick}
      style={{
        backgroundColor: buttonColor,
        flexGrow: flex ? 1 : 0,
        width: flex ? "100%" : "fit-content",
      }}
    >
      {icon && iconPosition === "left" && icon}
      {text}
      {icon && iconPosition === "right" && icon}
    </button>
  );
};

export default CustomButton;
