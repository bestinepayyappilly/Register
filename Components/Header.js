import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";

const Header = () => {
  return (
    <View>
      <View>
        <View
          style={{
            backgroundColor: "#fff",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
            paddingTop: 15,

            paddingHorizontal: 10,
          }}
        >
          <View>
            <Text
              style={{
                color: "#000",
                fontSize: 40,
                fontWeight: "700",
              }}
            >
              ther.
            </Text>
          </View>
          <View style={{ marginTop: 10 }}>
            <Image
              source={require("../assets/icons8-send-letter-96.png")}
              style={{ height: 45, width: 45 }}
            />
          </View>
        </View>
      </View>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({});
