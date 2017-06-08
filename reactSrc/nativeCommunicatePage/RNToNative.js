//@flow
import React, { Component } from "react";
import { NativeModules } from "react-native";
import { View, Button, Text } from "react-native";

type State = {
  text: string
};

type Props = {};

class RNToNative extends Component<void, Props, State> {
  state: State;
  constructor(props: any) {
    super(props);
    this.state = { text: "" };
  }

  static navigationOptions = {
    title: "原生与RN通讯"
  };

  //   调用原生弹窗方法
  handelClick() {
    const nativeAlert = NativeModules.NativeAlert;
    nativeAlert.testNormalEvent("test", "测试弹窗");
    nativeAlert.testCallbackEvent((error, newText) => {
      if (error) {
        console.error(error);
      } else {
        this.setState(() => {
          return { text: newText };
        });
      }
    });
  }

  render() {
    return (
      <View>
        <Button
          title="普通调用原生方法"
          color="#841584"
          onPress={() => {
            this.handelClick();
          }}
        />
        <Text>{this.state.text}</Text>
      </View>
    );
  }
}

export default RNToNative;
