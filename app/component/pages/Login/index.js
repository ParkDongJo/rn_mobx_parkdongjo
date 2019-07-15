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
  /* state */
  id: stores.root.authStore.auth.id,
  pwd: stores.root.authStore.auth.pwd,
  autoLoginFlag: stores.root.authStore.autoLoginFlag,

  /* action or computed */
  setId: stores.root.authStore.setId,
  setPwd: stores.root.authStore.setPwd,
  setAutoLoginFlag: stores.root.authStore.setAutoLoginFlag,
  login: stores.root.authStore.login,
  reset: stores.root.authStore.reset
  })
)
@observer
class Login extends React.Component {
    static navigationOptions = {
      header: null
    }

    constructor(props) {
      super(props);
    }

    componentWillUnmount() {
      this.props.authStore.reset();
    }

    onClickLoginBtn = async () => {
      const { login, navigation } = this.props;
      let resp = await login();

      if (resp.success) {
        navigation.navigate('Main');
      } else {
        Alert.alert('ERROR - ', resp.errMsg);
      }
    }

    onClickAutoLogin = () => {
      const { autoLoginFlag, setAutoLoginFlag } = this.props;
      
      setAutoLoginFlag(!autoLoginFlag);
    }

    render = () => {
      const { id, pwd, setId, setPwd, autoLoginFlag } = this.props;

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
                onChangeText={setId}
                value={id}
                autoCapitalize = 'none'
              />
              <View style={styles.label}>
                <Text>Password</Text>
              </View>
              <TextInput
                style={styles.input}
                onChangeText={setPwd}
                value={pwd}
                autoCapitalize = 'none'
                secureTextEntry={true}
              />
              <View style={styles.checkView}>
                <CheckBox
                  containerStyle={{backgroundColor: '#FFF', borderWidth: 0, padding:0, marginRight: 0}}
                  title='로그인 상태 유지'
                  checkedIcon='check-square'
                  checkedColor='green'
                  checked={autoLoginFlag}
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
