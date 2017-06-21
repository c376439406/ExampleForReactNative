//@flow
import React, { Component } from "react";
import { View, Button, StyleSheet } from "react-native";
import Contacts from "react-native-contacts";

class RNToNativeContacts extends Component {
  static navigationOptions = {
    title: "调用原生通讯录"
  };

  render() {
    return (
      <Button
        title="调用原生通讯录插件"
        color="#841584"
        onPress={() => {
          Contacts.getAll((err, contacts) => {
            console.log(err);
            console.log(contacts);
          });
        }}
      />
    );
  }
}

const styles = StyleSheet.create({
  // 背景视图母视图布局
  styleBgView: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "space-around"
  }
});

export default RNToNativeContacts;
