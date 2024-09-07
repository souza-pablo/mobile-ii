import {
  Text,
  TextProps,
  TouchableOpacity,
  TouchableOpacityProps,
} from "react-native";

type ButtonProps = TouchableOpacityProps & {};

function Button({ children, ...rest }: ButtonProps) {
  return (
    <TouchableOpacity
      className="w-full h-11 flex-row items-center justify-center rounded-lg gap-2 bg-orange-500"
      {...rest}
    >
      {children}
    </TouchableOpacity>
  );
}

function Title({ children }: TextProps) {
  return <Text className="text-green-500">{children}</Text>;
}

Button.Title = Title;

export { Button };
