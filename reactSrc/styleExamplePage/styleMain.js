//@flow
import React, { Component } from "react";
import PropTypes from "prop-types";
import { View, Button } from "react-native";
import { StackNavigator } from "react-navigation";

import ColorAndFont from "./colorAndFont";
import Absolute from "./absolute";
import Relative from "./relative";
import Layout from "./layout";

class StyleMain extends Component {
  static navigationOptions = {
    title: "样式首页"
  };

  pushPage(pageName: string) {
    this.props.navigation.navigate(pageName);
  }

  render() {
    return (
      <View>
        <Button
          title="颜色字体"
          color="#841584"
          onPress={this.pushPage.bind(this, "colorAndFont")}
        />
        <Button
          title="定位（绝对布局）"
          color="#841584"
          onPress={this.pushPage.bind(this, "absolute")}
        />
        <Button
          title="定位（相对布局）"
          color="#841584"
          onPress={this.pushPage.bind(this, "relative")}
        />
        <Button
          title="布局"
          color="#841584"
          onPress={this.pushPage.bind(this, "layout")}
        />
      </View>
    );
  }
}

StyleMain.propTypes = {
  navigation: PropTypes.object
};

const StyleMainNav = StackNavigator({
  sytleMain: { screen: StyleMain },
  colorAndFont: { screen: ColorAndFont },
  absolute: { screen: Absolute },
  relative: { screen: Relative },
  layout: { screen: Layout }
});

export default StyleMainNav;
