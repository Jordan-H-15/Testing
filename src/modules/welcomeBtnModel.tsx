import { PressableProps } from "react-native";

export interface propsWelcomeBtn {
  color?: string;
  filled: boolean;
  title: string;
  onPress: () => void;
}