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
  variant?: "contained" | "outlined" | "text";
  size?: "small" | "medium" | "large";
  disabled?: boolean;
  loading?: boolean;
}

const CustomButton: React.FC<CustomButtonProps> = ({
  text,
  onClick,
  icon,
  iconPosition = "right",
  buttonColor = "var(--primary-color)",
  hoverColor,
  flex = true,
  variant = "contained",
  size = "medium",
  disabled = false,
  loading = false,
}) => {
  return (
    <button
      className={`custom-button ${variant} ${size}`}
      onClick={onClick}
      disabled={disabled || loading}
      style={
        {
          backgroundColor:
            variant === "contained" ? buttonColor : "transparent",
          borderColor: variant !== "text" ? buttonColor : "transparent",
          color: variant === "contained" ? "var(--neutral-white)" : buttonColor,
          flexGrow: flex ? 1 : 0,
          width: flex ? "100%" : "fit-content",
          "--hover-color": hoverColor || buttonColor,
        } as React.CSSProperties
      }
    >
      {loading ? (
        <span className="loading-spinner" />
      ) : (
        <>
          {icon && iconPosition === "left" && icon}
          {text}
          {icon && iconPosition === "right" && icon}
        </>
      )}
    </button>
  );
};

export default CustomButton;
