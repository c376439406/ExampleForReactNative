//@flow
import React, { Component } from "react";
import PropTypes from "prop-types";
import { View, Button } from "react-native";
import { StackNavigator } from "react-navigation";

import RNToNative from "./RNToNative";
import RNToNativeContacts from "./RNToNativeContacts";

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
        <Button
          title="调用原生通讯录插件"
          color="#841584"
          onPress={this.pushPage.bind(this, "rNToNativeContacts")}
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
  rNToNative: { screen: RNToNative },
  rNToNativeContacts: { screen: RNToNativeContacts }
});

export default NativeMainNav;
