import React from "react";

type ButtonProps = {
  content: string;
  type: "button" | "submit" | "reset";
  variant?: "default" | "back";
  onClick?: () => void;
  icon?: React.ReactNode;
  iconPosition?: "left" | "right";
  size?: "small" | "medium" | "large" | "extraLarge";
};

const Button: React.FC<ButtonProps> = ({
  content,
  type,
  variant = "default",
  onClick,
  icon,
  iconPosition = "right",
  size = "medium",
}) => {
  const baseStyle = "rounded-md flex items-center justify-center";

  const variantStyle = {
    default: "bg-DarkTealBackground text-white hover:bg-LightTealBackground hover:text-black",
    back: "text-black hover:bg-DarkTealBackground hover:text-white",
  }[variant];

  const sizeStyle = {
    small: "px-2 py-1 text-sm",
    medium: "px-4 py-2 text-base",
    large: "px-6 py-3 text-lg",
    extraLarge: "px-8 py-4 text-xl",
  }[size];

  return (
    <button
      type={type}
      onClick={onClick}
      className={`${baseStyle} ${variantStyle} ${sizeStyle}`}
    >
      {icon && iconPosition === "left" && <span className="mr-1">{icon}</span>}
      {content}
      {icon && iconPosition === "right" && <span className="ml-1">{icon}</span>}
    </button>
  );
};

export default Button;