import React from "react";
import { StyleSheet, Text, View, Image, ScrollView } from "react-native";
import { StatusBar } from "expo-status-bar";
import Header from "./Components/Header";
import LocationBar from "./Components/LocationBar";

const App = () => {
  return (
    <View>
      <Header />
      <ScrollView>
        <LocationBar />
      </ScrollView>
      <StatusBar style="dark" />
    </View>
  );
};

export default App;

const styles = StyleSheet.create({});
