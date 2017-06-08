//@flow
import React, { Component } from "react";
import { View, StyleSheet, TextInput } from "react-native";
import RCTDeviceEventEmitter from "RCTDeviceEventEmitter";

class EventEmitterCom extends Component {
  static navigationOptions = {
    title: "RCTDeviceEventEmitter通讯"
  };
  handleChangeText(test: string) {
    //发送自定义事件，可传数据
    RCTDeviceEventEmitter.emit("customEvt", {
      data: test
    });
  }

  render() {
    return (
      <TextInput
        placeholder="输入回调内容"
        style={styles.container}
        onChangeText={test => {
          this.handleChangeText(test);
        }}
      />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    margin: 10
  }
});

export default EventEmitterCom;
