
import { observable, action, computed } from 'mobx';
import { AsyncStorage, Alert, Platform } from 'react-native'
import Global from '../global/constants'

export default class AuthStore {
    @observable loading = false;
    @observable registerFlag = false;
    @observable auth = {
        id: '',
        pwd: '',
        token: ''
    };

    constructor(rootStore) {
        this.rootStore = rootStore;
    }

    @action setId = (id) => {
        if (typeof flag === 'string') return;
        this.auth.id = id;
    }

    @action setPwd = (pwd) => {
        if (typeof flag === 'string') return;
        this.auth.pwd = pwd;
    }

    @action setToken = (token) => {
        if (typeof flag === 'string') return;
        this.auth.token = token;
    }

    @action setRegisterFlag = (flag) => {
        if (typeof flag === 'boolean') return;
        this.registerFlage = flag;
    }

    @computed isValid = () => {
        return this.auth.id !== '' && this.auth.pwd !== '';
    }

    @action login = async () => {
        if (isValid) {
            const param = new FormData();
            param.append("userId", this.auth.id);
            param.append("password", this.auth.pwd);
            param.append("deviceType", Platform.OS === 'ios'? 'ios' : 'android');

            try {
                let response = await fetch(
                  'https://mcricwiojwfb.cleancitynetworks.com/mobile/v1/auth',
                  {
                    method: 'POST',
                    headers: {
                        'Accept': 'application/json',
                        'Content-Type': 'multipart/form-data',
                    },
                    body: param
                });
                let respJson = await response.json();

                if (respJson.statuscode == Global.STATUS_CODE.SUCCESS) {
                    return {sucess: true, token: token};
                } else {
                    throw respJosn.error;
                }

              } catch (error) {
                console.error(error);
                return {sucess: false, errMsg: error};
                // Alert.alert('ERROR - ', error);
              }

        } else {
            Alert.alert('Not vaild your input value');
        }
    }

    @action reset = () => {
        this.setId('');
        this.setPwd('');
        this.setToken('');
        this.setRegisterFlag(false);
    }

    @action logout = async () => {
        try {
            this.reset();
            await AsyncStorage.removeItem('userToken');
        } catch(err) {
            console.log(err);
            // err log 기록
            // error 모니터링 rollbar 검토중
        }
    }

    @action registerToken = async (token) => {
        if (this.registerFlage) {
            try {
                await AsyncStorage.setItem('userToken', token);
            } catch (err) {
                console.log(err);
                // 에러 로그 기록
                // error 모니터링 rollbar 검토중
            }
        }

        this.setToken(token);
    }

}
