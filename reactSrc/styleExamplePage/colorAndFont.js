//@flow
import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";

class ColorAndFont extends Component {
  static navigationOptions = {
    title: "颜色与字体样式"
  };

  render() {
    return (
      <View style={styles.styleBgView}>
        <Text style={{ color: "orange", fontSize: 20 }}> 大字号内联样式</Text>
        <Text style={styles.style_1}> 小字号外边框</Text>
        <Text style={styles.style_2}> 大字号外边框字体居中</Text>
        <Text
          style={[
            styles.bigblue,
            styles.red,
            styles.bigFontSize,
            styles.orange
          ]}
        >
          多个样式混合使用
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  // 背景视图母视图布局
  styleBgView: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "space-around"
  },

  //小字号外边框
  style_1: {
    color: "#ff00ff",
    height: 40,
    borderWidth: 1,
    borderColor: "red"
  },

  //大字号外边框字体居中
  style_2: {
    color: "#ff00ff",
    fontSize: 20,
    height: 40,
    borderWidth: 1,
    borderColor: "blue",
    textAlign: "center"
  },
  // 多个样式混合使用
  bigblue: {
    color: "blue",
    fontWeight: "bold",
    fontSize: 30
  },
  red: {
    color: "red"
  },
  bigFontSize: {
    fontSize: 40
  },
  orange: {
    color: "orange"
  }
});

export default ColorAndFont;
