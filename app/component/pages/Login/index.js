import React, { Component } from 'react';
import {
  View,
  Text,
  Button,
  Image,
  TextInput,
  TouchableOpacity,
  Alert,
  AsyncStorage,
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
        checked: true,
      };
    }

    componentWillUnmount() {
      this.props.authStore.reset();
    }

    onClickLoginBtn = async () => {
      const { authStore, navigation } = this.props;
      let resp = await authStore.login();

      if (resp.success) {
        navigation.navigate('Main');
      } else {
        Alert.alert('ERROR - ', resp.errMsg);
      }

    }

    onClickAutoLogin = () => {
      const checked = !this.state.checked;
      
      this.props.authStore.setAutoLoginFlag(checked);
      this.setState({checked: checked})
    }

    render = () => {
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
                onChangeText={(id) => authStore.setId(id)}
                autoCapitalize = 'none'
                value={authStore.id}
              />
              <View style={styles.label}>
                <Text>Password</Text>
              </View>
              <TextInput
                style={styles.input}
                onChangeText={(pwd) => authStore.setPwd(pwd)}
                value={authStore.pwd}
                autoCapitalize = 'none'
                secureTextEntry={true}
              />
              <View style={styles.checkView}>
                <CheckBox
                  containerStyle={{backgroundColor: '#FFF', borderWidth: 0, padding:0, marginRight: 0}}
                  title='로그인 상태 유지'
                  checkedIcon='check-square'
                  checkedColor='green'
                  checked={this.state.checked}
                  onPress={this.onClickAutoLogin.bind(this)}
                  />
              </View>
            </View>{/* 입력영역 end */}

            <View style={styles.btnView}>
              <TouchableOpacity style={[styles.defBtn, styles.loginBtn]}>
                <Button
                  onPress={this.onClickLoginBtn.bind(this)}
                  title="로그인"
                  color="#841584"
                />
              </TouchableOpacity>
              <TouchableOpacity style={[styles.defBtn, styles.findPwdBtn]}>
                <Button
                  onPress={() => {Alert.alert("this func not working")}}
                  title="비밀번호 찾기"
                  color="#841584"
                />
              </TouchableOpacity>
            </View>
          </View>{/* 버튼영역 end */}

        </View>
      )
    }
}

export default Login;
