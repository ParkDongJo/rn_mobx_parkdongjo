
import { observable, action, computed } from 'mobx';
import { AsyncStorage, Alert, Platform } from 'react-native'
import Global from '../global/constants'

export default class AuthStore {
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
        if (typeof id !== 'string') return;
        this.auth.id = id;
    }

    @action setPwd = (pwd) => {
        if (typeof pwd !== 'string') return;
        this.auth.pwd = pwd;
    }

    @action setToken = (token) => {
        if (typeof token !== 'string') return;
        this.auth.token = token;
    }

    @action setRegisterFlag = (flag) => {
        if (typeof flag !== 'boolean') return;
        this.registerFlag = flag;
    }

    @computed get isValid() {
        return this.auth.id !== '' && this.auth.pwd !== '';
    }

    @action login = async () => {
        if (this.isValid) {
            const param = {
                "userId": this.auth.id,
                "password": this.auth.pwd,
                "deviceType": Platform.OS === 'ios'? 'ios' : 'android'
            };

            try {
                let response = await fetch(
                  'https://mcricwiojwfb.cleancitynetworks.com/mobile/v1/auth/',
                  {
                    method: 'POST',
                    headers: {
                        'Accept': 'application/json',
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(param)
                });

                let respJson = await response.json();

                if (response.ok) {
                    return {success: true, token: respJson.data.token};

                } else {
                    throw respJson.message;
                }

            } catch (error) {
                console.log(error);
                return {sucess: false, errMsg: error};
                // Alert.alert('ERROR - ', error);
                // err log 기록
                // error 모니터링 rollbar 검토중
            }

        } else {
            Alert.alert('Not vaild your input value');
        }
    }

    @action reset = () => {
        this.setId('');
        this.setPwd('');
        this.setRegisterFlag(false);
    }

    @action logout = async () => {
        try {
            this.reset();
            this.setToken('');
            await AsyncStorage.removeItem('userToken');
        } catch(err) {
            console.log(err);
            // err log 기록
            // error 모니터링 rollbar 검토중
        }
    }

    @action registerToken = async (token) => {

        if (this.registerFlag) {
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
