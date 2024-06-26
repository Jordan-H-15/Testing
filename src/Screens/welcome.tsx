import { View, Text, Image, StyleSheet, Pressable } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { styled } from "nativewind";
import { Colors } from "react-native/Libraries/NewAppScreen";
import COLORS from "../constraints/colours";
import Button from "../components/Button";

export default function Welcome({ navigation }: { navigation: any} ) {
  return (
    <LinearGradient
      style={{ flex: 1 }}
      colors={[COLORS.secondary, COLORS.primary]}
    >
      <View style= {{
        height: "100%",
        flex: 1,
        flexDirection: "column",
      }}>
        <Image
          source={require("../images/testing.png")}
          style={{
            height: 100,
            width: 100,
            borderRadius: 20,
            position: "absolute",
            top: 10,
            transform: [
              { translateX: 20 },
              { translateY: 50 },
              { rotate: "-15deg" },
            ],
          }}
        />

        <View
          style={{
            paddingHorizontal: 22,
            position: "absolute",
            top: 400,
            width: "100%",
          }}
        >
          <Text
            style={{
              fontSize: 50,
              fontWeight: "800",
              color: COLORS.white,
            }}
          >
            Let's Get
          </Text>
          <Text
            style={{
              fontSize: 46,
              fontWeight: "800",
              color: COLORS.white,
            }}
          >
            Started
          </Text>
        </View>

        <View
          style={{
            marginVertical: 22,
          }}
        >
          <Text
            style={{
              fontSize: 16,
              color: COLORS.white,
              marginVertical: 4,
            }}
          >
            Welcome to the beginning of your nex improved fitness journay
          </Text>
          <Text
            style={{
              fontSize: 16,
              color: COLORS.white,
            }}
          >
            Safe, Reliable, Proven
          </Text>
        </View>

        <Button
          title="Join Now"
          color= {undefined}
          filled= {true}
          onPress={() => navigation.navigate("signup")}
        />

        <View style={{
          flexDirection: 'row',
          marginTop: 12,
          justifyContent: 'center'
        }}>
          <Text style= {{
            fontSize: 16,
            color: COLORS.white
          }}>
            Already have an Account ?
          </Text>
          <Pressable onPress={() => navigation.navigate("login")}>
            <Text style={{
                fontSize: 16,
                color: COLORS.white,
                fontWeight: "bold",
                marginTop: 4
            }}>Login</Text>
          </Pressable>
        </View>
      </View>
    </LinearGradient>
  );
}