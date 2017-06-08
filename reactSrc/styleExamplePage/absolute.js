//@flow
import React, { Component } from "react";
import { View, StyleSheet } from "react-native";

class Absolute extends Component {
  static navigationOptions = {
    title: "绝对定位"
  };

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.box1} />
        <View style={styles.box2} />
        <View style={styles.box3} />
        <View style={styles.box4} />
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
    position: "absolute",
    left: 30 //左边距离屏幕左侧30单位
  },
  box2: {
    width: 50,
    height: 50,
    backgroundColor: "#0f0", //绿色
    position: "absolute",
    top: 30 //上边距离屏幕上侧30单位
  },
  box3: {
    width: 50,
    height: 50,
    backgroundColor: "#f0f", //紫色
    position: "absolute",
    right: 30 //右边距离屏幕右侧30单位
  },
  box4: {
    width: 50,
    height: 50,
    backgroundColor: "#00f", //蓝色
    position: "absolute",
    bottom: 30 //下边距离屏幕下侧30单位
  }
});

export default Absolute;
