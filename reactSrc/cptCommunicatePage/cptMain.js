//@flow
import React, { Component } from "react";
import PropTypes from "prop-types";
import { View, Button, Text } from "react-native";
import { StackNavigator } from "react-navigation";
import RCTDeviceEventEmitter from "RCTDeviceEventEmitter";

import WithoutJSXPage from "./withoutJSX";
import CreateComponent from "./createComponent";
import PropsAndStateCom from "./propsAndStateCom";
import RefsCom from "./refsCom";
import EventEmitterCom from "./eventEmitterCom";

/**
 * 组件通讯参考资料：https://jinlong.github.io/2016/12/16/react-native-component-communication/
 */
class CptMain extends Component {
  constructor(props) {
    super(props);
    this.state = { text: "" };
  }
  static navigationOptions = {
    title: "组件及组件通讯首页"
  };
  pushPage(pageName: string) {
    this.props.navigation.navigate(pageName);
  }

  componentDidMount() {
    //监听自定义事件
    RCTDeviceEventEmitter.addListener("customEvt", o => {
      this.setState(() => {
        return { text: o.data };
      });
    });
  }

  render() {
    return (
      <View>
        <Button
          title="JSX"
          color="#841584"
          onPress={this.pushPage.bind(this, "withoutJSX")}
        />
        <Button
          title="创建组件的几种方式"
          color="#841584"
          onPress={this.pushPage.bind(this, "createComponent")}
        />
        <Button
          title="使用props和state通讯"
          color="#841584"
          onPress={this.pushPage.bind(this, "propsAndStateCom")}
        />
        <Button
          title="使用Refs通讯"
          color="#841584"
          onPress={this.pushPage.bind(this, "refsCom")}
        />
        <Button
          title="使用RCTDeviceEventEmitter通讯"
          color="#841584"
          onPress={this.pushPage.bind(this, "eventEmitterCom")}
        />
        <Text>eventEmitterCom界面输入：{this.state.text}</Text>
      </View>
    );
  }
}

CptMain.propTypes = {
  navigation: PropTypes.object
};

const CptMainNav = StackNavigator({
  cptMain: { screen: CptMain },
  withoutJSX: { screen: WithoutJSXPage },
  createComponent: { screen: CreateComponent },
  propsAndStateCom: { screen: PropsAndStateCom },
  refsCom: { screen: RefsCom },
  eventEmitterCom: { screen: EventEmitterCom }
});

export default CptMainNav;
