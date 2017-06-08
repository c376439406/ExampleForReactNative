//@flow
import React, { Component } from "react";
import PropTypes from "prop-types";
import { View, Button } from "react-native";
import { StackNavigator } from "react-navigation";

import RNToNative from "./RNToNative";

class NativeMain extends Component {
  static navigationOptions = {
    title: "原生与RN通讯首页"
  };

  pushPage(pageName: string) {
    this.props.navigation.navigate(pageName);
  }

  render() {
    return (
      <View>
        <Button
          title="RN调用原生"
          color="#841584"
          onPress={this.pushPage.bind(this, "rNToNative")}
        />
      </View>
    );
  }
}

NativeMain.propTypes = {
  navigation: PropTypes.object
};

const NativeMainNav = StackNavigator({
  nativeMain: { screen: NativeMain },
  rNToNative: { screen: RNToNative }
});

export default NativeMainNav;
