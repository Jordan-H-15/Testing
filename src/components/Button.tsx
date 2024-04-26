import {
  View,
  Text,
  StyleSheet,
  Touchable,
  TouchableOpacity,
} from "react-native";
import React from "react";
import COLORS from "../constraints/colours";
import { propsWelcomeBtn } from "../modules/welcomeBtnModel";

const Buttons = (props: propsWelcomeBtn) => {
  const { color, filled, title, onPress } = props;
  const filledBgColor = color || COLORS.primary;
  const outlinedColor = COLORS.white;
  const bgColor = filled ? filledBgColor : outlinedColor;
  const textColor = filled ? COLORS.white : COLORS.primary;

  return (
    <TouchableOpacity
      style={{
        ...styles.button,
        backgroundColor: bgColor
      }}
      onPress={onPress}
    >
      <Text style={{ fontSize: 18, ...{ color: textColor } }}>
        {title}
      </Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    paddingBottom: 16,
    paddingVertical: 10,
    borderColor: COLORS.primary,
    borderWidth: 2,
    borderRadius: 12,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 22,
    width: "100%"
  },
});
export default Buttons;
