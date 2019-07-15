import React, { Component } from 'react';
import {
  View,
  KeyboardAvoidingView,
  Text,
  Button,
  Image,
  TextInput,
  TouchableOpacity,
  Alert,
  Platform,
  AsyncStorage,
  SafeAreaView
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
        <SafeAreaView style={{flex: 1}}>
        <KeyboardAvoidingView style={styles.container} 
                          behavior={Platform.OS === "ios" ? "padding" : null} 
                          keyboardVerticalOffset={Platform.OS === "ios" ? 60 : 0} enabled>
          <View style={styles.content}>

            <View style={styles.introView}>
              <Image style={styles.introImg} />
            </View>{/* 인트로 영역 end */}

            <View style={styles.inputView}>
              <View style={styles.label}>
                <Text style={styles.labelTxt}>ID</Text>
              </View>
              <TextInput
                style={styles.input}
                onChangeText={setId}
                value={id}
                autoCapitalize = 'none'
              />
              
              <View style={[styles.label, styles.pwdInput]}>
                <Text style={styles.labelTxt}>Password</Text>
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
                  containerStyle={{backgroundColor: '#FFF', 
                                    borderWidth: 0, 
                                    padding:0, 
                                    marginRight: 0,
                                    marginLeft: 0,
                                    height: 24}}
                  title='로그인 상태 유지'
                  size={20}
                  textStyle={{fontWeight: "400", 
                              color: 'rgba(0, 0, 0, 0.6)',
                              fontSize: 13.6,
                              lineHeight: 16,
                              letterSpacing: 1.25}}
                  checkedIcon='check-square'
                  checkedColor='green'
                  checked={autoLoginFlag}
                  onPress={this.onClickAutoLogin.bind(this)}
                  />
              </View>

              <View style={styles.btnView}>
                            <TouchableOpacity style={[styles.defBtn, styles.loginBtn]}
                                    onPress={this.onClickLoginBtn.bind(this)}>
                    <Text style={[styles.btnTxt, styles.loginTxt]}>로그인</Text>
                  </TouchableOpacity>
                  <TouchableOpacity style={[styles.defBtn, styles.findPwdBtn]}
                                    onPress={() => {Alert.alert("Sorry, This func not working")}}>
                    <Text style={styles.findPwdTxt}>비밀번호 찾기</Text>
                  </TouchableOpacity>
              </View>{/* 버튼영역 end */}

            </View>{/* 입력영역 end */}
          </View>

        </KeyboardAvoidingView>
        </SafeAreaView>
      )
    }
}

export default Login;
