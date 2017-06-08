//@flow
import React, { Component } from "react";
import { View, StyleSheet, Text, TextInput } from "react-native";
import PropTypes from "prop-types";
import CreateClass from "create-react-class";

/**
 * 使用createClass
 * React对属性中的所有函数都进行了this绑定，也就是如上面的hanleClick其实相当于handleClick.bind(this)
 * 
 * 备注：
 * 在React版本15.0.0之后,React.createClass方法不可用，
 * 需要 npm install create-react-class 库才能使用
 */
let UseCreateClass = CreateClass({
  propTypes: {
    name: PropTypes.string //属性校验
  },
  getDefaultProps() {
    return {
      name: "Mary" //默认属性值
    };
  },
  getInitialState() {
    return { count: this.props.initialCount }; //初始化state
  },
  handleClick() {
    //用户点击事件的处理函数
    console.log("UseCreateClass");
  },
  render() {
    return (
      <View style={styles.box1}>
        <Text>Hello, {this.props.name}</Text>
        <Text onPress={this.handleClick}>
          click here to get log
        </Text>
        <Text>数组成员数为： {this.props.wordsArray.length}</Text>
      </View>
    );
  }
});

/**
 * 使用component
 * ES6对类和继承有语法级别的支持
 * 用这种方式创建组件时，React并没有对内部的函数，进行this绑定
 */
class UseComponent extends React.Component {
  handleClick() {
    //点击事件的处理函数
    console.log("UseComponent");
  }

  render() {
    return (
      <View style={styles.box2}>
        <Text>Hello, {this.props.name}</Text>
        <Text onPress={this.handleClick}>
          click here to get log
        </Text>
        <Text>数组成员数为： {this.props.wordsArray.length}</Text>
      </View>
    );
  }
}

UseComponent.propTypes = {
  name: PropTypes.string,
  wordsArray: PropTypes.array
};

/**
 * 使用PureComponet
 * 优化了Component中shouldComponentUpdate的方法调用
 * 但只对对象做浅对比，使用时进行对象赋值时，要进行深拷贝
 */
class USEPureComponent extends React.PureComponent {
  constructor(props) {
    super(props);
  }

  handleClick() {
    //点击事件的处理函数
    console.log("USEPureComponent");
  }

  render() {
    return (
      <View style={styles.box3}>
        <Text>Hello, {this.props.name}</Text>
        <Text onPress={this.handleClick}>
          click here to get log
        </Text>
        <Text>数组成员数为： {this.props.wordsArray.length}</Text>
      </View>
    );
  }
}

USEPureComponent.propTypes = {
  name: PropTypes.string,
  wordsArray: PropTypes.array
};

/**
 * 使用Stateless Functional Component
 * 无状态组件不支持 "ref"
 * 参考资料：https://segmentfault.com/a/1190000008402834
 */
const UseStateless = (props: any) => {
  const { name, handleClick, wordsArray } = props;

  return (
    <View style={styles.box3}>
      <Text>Hello, {name}</Text>
      <Text onPress={handleClick}>
        click here to get log
      </Text>
      <Text>数组成员数为： {wordsArray.length}</Text>
    </View>
  );
};

// 页面
class CreateComponent extends Component {
  static navigationOptions = {
    title: "不同方式创建组件"
  };

  constructor(props: any) {
    super(props);
    this.state = {
      wordsArray: []
    };
  }
  state: any = {
    wordsArray: Array
  };

  inputTextHasChange(newText: string) {
    this.setState(() => {
      this.state.wordsArray.push(newText);
      return { wordsArray: this.state.wordsArray };
    });
  }

  render() {
    return (
      <View style={styles.container}>
        <TextInput
          style={styles.input}
          placeholder="Type here to translate!"
          onChangeText={text => this.inputTextHasChange(text)}
        />
        <UseCreateClass
          name="UseCreateClass"
          wordsArray={this.state.wordsArray}
        />
        <UseComponent name="UseComponent" wordsArray={this.state.wordsArray} />
        <USEPureComponent
          name="USEPureComponent"
          wordsArray={this.state.wordsArray}
        />
        <UseStateless
          name="UseStateless"
          handleClick={() => {
            console.log("UseStateless");
          }}
          wordsArray={this.state.wordsArray}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ff0" //黄色
  },
  input: {
    width: 200,
    height: 30,
    backgroundColor: "#fff" //白色
  },

  box1: {
    width: 200,
    height: 100,
    backgroundColor: "#f00", //红色
    margin: 10
  },
  box2: {
    width: 200,
    height: 100,
    backgroundColor: "#0f0", //绿色
    margin: 10
  },
  box3: {
    width: 200,
    height: 100,
    backgroundColor: "#f0f", //紫色
    margin: 10
  },
  box4: {
    width: 200,
    height: 100,
    backgroundColor: "#00f", //蓝色
    margin: 10
  }
});

export default CreateComponent;
