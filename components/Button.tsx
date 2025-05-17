import React from "react";
import {
  Text,
  TouchableOpacity,
  TouchableOpacityProps,
} from "react-native";

interface ButtonProps extends TouchableOpacityProps {
  children: React.ReactNode;
  className?: string;
  textClassName?: string;
}

const Button: React.FC<ButtonProps> = ({
  children,
  className = "bg-blue-500 p-4 rounded w-full",
  textClassName = "text-white text-center",
  ...touchableProps
}) => {
  return (
    <TouchableOpacity className={className} {...touchableProps}>
      <Text className={textClassName}>
        {children}
      </Text>
    </TouchableOpacity>
  );
};

export default Button;