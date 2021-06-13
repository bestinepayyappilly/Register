import React from "react";
import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";

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
                alignSelf: "center",
              }}
            >
              ther
              <Text style={{ color: "#1DB954" }}>.</Text>
            </Text>
          </View>
          <View style={{ marginTop: 10 }}>
            <TouchableOpacity onPress={() => {}}>
              <Image
                source={require("../assets/icons8-send-letter-96.png")}
                style={{ height: 35, width: 35, alignSelf: "center" }}
              />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({});
