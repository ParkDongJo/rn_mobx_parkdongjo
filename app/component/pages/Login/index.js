import React, { Component } from 'react';
import {
  View,
  Text,
  Button,
  Image,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import { CheckBox } from 'react-native-elements';
import styles from './styles';
import { observer, inject } from 'mobx-react';


@inject(stores => ({
    authStore: stores.root.authStore
  })
)
class Login extends React.Component {
    static navigationOptions = {
      header: null
    }

    constructor(props) {
      super(props);

      this.state = {
        isLoading: false,
        text: 'Test',
      };
    }

    render() {
      const { authStore } = this.props;

      return (
        <View style={styles.container}>
          <View style={styles.content}>

            <View style={styles.introView}>
              <Image style={{width: 100, height: 100, backgroundColor: 'gray', marginBottom: 60}} />
            </View>{/* 인트로 영역 end */}

            <View style={styles.inputView}>
              <View style={styles.label}>
                <Text>ID</Text>
              </View>
              <TextInput
                style={styles.input}
                onChangeText={(text) => this.setState({text})}
                value={this.state.text}
              />
              <View style={styles.label}>
                <Text>Password</Text>
              </View>
              <TextInput
                style={styles.input}
                onChangeText={(text) => this.setState({text})}
                value={this.state.text}
              />
              <View>

              </View>
            </View>{/* 입력영역 end */}

            <View style={styles.btnView}>
              <TouchableOpacity style={[styles.defBtn, styles.loginBtn]}>
                <Button
                  onPress={() => {}}
                  title="로그인"
                  color="#841584"
                />
              </TouchableOpacity>
              <TouchableOpacity style={[styles.defBtn, styles.findPwdBtn]}>
                <Button
                  onPress={() => {}}
                  title="비밀번호 찾기"
                  color="#841584"
                />
              </TouchableOpacity>
            </View>
          </View>{/* 버튼영역 end */}

        </View>
      );
    }
}

export default Login;
