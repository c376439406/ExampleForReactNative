//@flow
import React, { Component } from "react";
import { View, StyleSheet, Text } from "react-native";

/**不使用JSX 进行创建元素
 * 
 * ReactElement createElement(
  string/ReactClass type,
  [object props],
  [children ...]
)
 */

/**
 * 注意报错：RawText " " must be wrapped in an explicit <Text> component.
 * 1、自定义元素开头必须大写
 * 2、元素间不能有多余空格
 * 参考链接：http://blog.techbridge.cc/2016/04/21/react-jsx-introduction/
 */

class WithoutJSX extends Component {
  render() {
    return React.createElement(
      View,
      { style: styles.box2 },
      React.createElement(Text, null, "不使用JSX")
    );
  }
}

class UseJSX extends Component {
  render() {
    return (
      <View style={styles.box1}>
        <Text>使用了JSX</Text>
      </View>
    );
  }
}

class WithoutJSXPage extends Component {
  static navigationOptions = {
    title: "JSX的使用原理"
  };

  render() {
    return (
      <View style={styles.container}>
        <UseJSX />
        <WithoutJSX />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff"
  },

  box1: {
    width: 150,
    height: 150,
    backgroundColor: "#f00", //红色
    margin: 10
  },
  box2: {
    width: 150,
    height: 150,
    backgroundColor: "#0f0", //绿色
    margin: 10
  }
});

export default WithoutJSXPage;
