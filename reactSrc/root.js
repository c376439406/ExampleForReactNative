//@flow
import React, { Component } from "react";
import { TabNavigator } from "react-navigation";
import { View, StyleSheet, Text } from "react-native";
import PropTypes from "prop-types";

import StyleMainNav from "./styleExamplePage/styleMain";
import NativeMainNav from "./nativeCommunicatePage/nativeMain";
import CptMainNav from "./cptCommunicatePage/cptMain";

const MainScreenNavigator = TabNavigator({
  styleMainNav: { screen: StyleMainNav },
  cptMainNav: { screen: CptMainNav },
  nativeMainNav: { screen: NativeMainNav }
});

class APPRoot extends Component {
  render() {
    let initString = this.props.NativeName;
    if (initString === "SF-SYT") {
      return <MainScreenNavigator />;
    } else {
      return (
        <View style={styles.container}>
          <Text style={styles.text}>初始化名字不是 “SF-SYT”</Text>
        </View>
      );
    }
  }
}
APPRoot.propTypes = {
  NativeName: PropTypes.string
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#0f0"
  },
  text: {
    height: 40,
    width: 200,
    top: 100,
    left: 90,
    backgroundColor: "red"
  }
});

export default APPRoot;
