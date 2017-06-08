//@flow
import React, { Component } from "react";
import { View, StyleSheet, Text, TextInput, Button } from "react-native";

class SubComponent extends Component {
  inputTextHasChange(newText: string) {
    this.setState(() => {
      return { text: newText };
    });
  }
  currentText(): string {
    return this.state.text;
  }
  render() {
    return (
      <View style={styles.box2}>
        <TextInput
          style={styles.input}
          onChangeText={text => this.inputTextHasChange(text)}
        />
      </View>
    );
  }
}

class SuperComponent extends Component {
  constructor(props) {
    super(props);
    this.state = { text: "" };
  }
  subView: SubComponent;
  handelClick() {
    let newText = this.subView.currentText();
    this.setState(() => {
      return { text: newText };
    });
  }
  render() {
    return (
      <View style={styles.box1}>
        <SubComponent
          ref={c => {
            this.subView = c;
          }}
        />
        <Text>子组件输入：{this.state.text}</Text>
        <Button title="获取子组件数据" onPress={this.handelClick.bind(this)} />
      </View>
    );
  }
}

class RefsCom extends Component {
  static navigationOptions = {
    title: "Refs通讯"
  };

  render() {
    return (
      <View style={styles.container}>
        <SuperComponent />
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
    width: 300,
    height: 350,
    backgroundColor: "#f00", //红色
    margin: 10
  },
  box2: {
    width: 200,
    height: 150,
    backgroundColor: "#0f0", //绿色
    margin: 10
  },
  input: {
    width: 100,
    height: 40,
    backgroundColor: "#fff", //白色
    margin: 10
  }
});

export default RefsCom;
