//@flow
import React, { Component } from "react";
import { View, StyleSheet } from "react-native";

class Relative extends Component {
  static navigationOptions = {
    title: "相对定位"
  };

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.box1} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ff0" //黄色
  },
  box1: {
    width: 50,
    height: 50,
    backgroundColor: "#f00", //红色
    position: "relative",
    left: 30,
    top: 30
  }
});

export default Relative;
