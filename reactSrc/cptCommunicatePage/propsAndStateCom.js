//@flow
import React, { Component } from "react";
import { View, StyleSheet, Text, TextInput } from "react-native";
import PropTypes from "prop-types";

// 组件内部用 state

class SubComponent extends Component {
  constructor(props) {
    super(props);
    this.state = { text: "" };
  }
  inputTextHasChange(newText: string) {
    this.setState(() => {
      return { text: newText };
    });
  }
  render() {
    return (
      <View style={styles.box2}>
        <TextInput
          style={styles.input}
          onChangeText={text => this.inputTextHasChange(text)}
        />
        <Text>内部输入：{this.state.text}</Text>
        <Text>父组件输入：{this.props.superText}</Text>
        <TextInput
          style={styles.input}
          onChangeText={text => this.props.callBack(text)}
        />
      </View>
    );
  }
}

SubComponent.propTypes = {
  superText: PropTypes.string,
  callBack: PropTypes.object
};

class SuperComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: "",
      callBackText: ""
    };
  }
  inputTextHasChange(newText: string) {
    this.setState(() => {
      return { text: newText };
    });
  }
  receiverCallBack(callBackText) {
    this.setState(() => {
      return { callBackText: callBackText };
    });
  }

  render() {
    return (
      <View style={styles.box1}>
        <TextInput
          style={styles.input}
          onChangeText={text => this.inputTextHasChange(text)}
        />
        <SubComponent
          superText={this.state.text}
          callBack={subInput => {
            this.receiverCallBack(subInput);
          }}
        />
        <Text>子组件输入：{this.state.callBackText}</Text>
      </View>
    );
  }
}

class PropsAndStateCom extends Component {
  static navigationOptions = {
    title: "props和state通讯"
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

export default PropsAndStateCom;
