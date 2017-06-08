//@flow
import React, { Component } from "react";
import { View, StyleSheet, ScrollView, Text } from "react-native";

class Layout extends Component {
  static navigationOptions = {
    title: "布局"
  };

  render() {
    return (
      <ScrollView style={styles.superView}>
        <View style={[styles.container1, styles.column, styles.hugeHeight]}>
          <Text style={styles.box}>
            1
          </Text>
          <Text style={styles.box}>
            2
          </Text>
          <Text style={styles.box}>
            3
          </Text>
        </View>

        <View style={[styles.container2, styles.row]}>
          <Text style={[styles.box, styles.flex1]}>
            1
          </Text>
          <Text style={[styles.box, styles.flex2]}>
            2
          </Text>
          <Text style={[styles.box, styles.flex3]}>
            3
          </Text>
        </View>

        <View style={[styles.container1, styles.row, styles.justifyContent1]}>
          <Text style={styles.box}>
            1
          </Text>
          <Text style={styles.box}>
            2
          </Text>
          <Text style={styles.box}>
            3
          </Text>
        </View>
        <View style={[styles.container1, styles.row, styles.justifyContent2]}>
          <Text style={styles.box}>
            1
          </Text>
          <Text style={styles.box}>
            2
          </Text>
          <Text style={styles.box}>
            3
          </Text>
        </View>

        <View style={[styles.container1, styles.row, styles.justifyContent3]}>
          <Text style={styles.box}>
            1
          </Text>
          <Text style={styles.box}>
            2
          </Text>
          <Text style={styles.box}>
            3
          </Text>
        </View>
        <View style={[styles.container1, styles.row, styles.justifyContent4]}>
          <Text style={styles.box}>
            1
          </Text>
          <Text style={styles.box}>
            2
          </Text>
          <Text style={styles.box}>
            3
          </Text>
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  // scrollView背景设置
  superView: {
    flex: 1,
    backgroundColor: "#ff0",
    flexDirection: "column"
  },
  //   单个红绿视图背景设置
  container1: {
    height: 100,
    backgroundColor: "#f00", //红色
    margin: 10
  },
  container2: {
    height: 100,
    backgroundColor: "#fff", //白色
    margin: 10
  },

  // 纵向布局
  column: {
    flexDirection: "column"
  },

  // 横向布局
  row: {
    flexDirection: "row"
  },

  //   主轴适配
  justifyContent1: {
    justifyContent: "flex-start"
  },
  justifyContent2: {
    justifyContent: "flex-end"
  },
  justifyContent3: {
    justifyContent: "center"
  },
  justifyContent4: {
    justifyContent: "space-around"
  },

  //   盒子背景设置
  box: {
    width: 50,
    height: 50,
    backgroundColor: "#0ff",
    margin: 10,
    fontSize: 20,
    textAlign: "center"
  },
  //   弹性比例
  flex1: {
    flex: 1
  },
  flex2: {
    flex: 2
  },
  flex3: {
    flex: 3
  },

  hugeHeight: {
    height: 300
  }
});

export default Layout;
