
import { observable, action, computed } from 'mobx';
import { AsyncStorage, Alert, Platform } from 'react-native'
import Global from '../global/constants'
import { callApiByPost } from './../global/functions';


export default class AuthStore {
    @observable autoLoginFlag = true;
    @observable auth = {
        id: '',
        pwd: '',
        token: ''
    };

    constructor(rootStore) {
        this.root = rootStore;
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

    @action setAutoLoginFlag = (flag) => {
        if (typeof flag !== 'boolean') return;
        this.autoLoginFlag = flag;
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

            let resp = await callApiByPost({param: param, path: '/mobile/v1/auth/'})

            if (resp.success) {
                await this.registerAutoLogin();
                this.setToken(resp.token);
            }
            return resp;
        } else {
            return {sucess: false, errMsg: 'Not vaild your input value'};
        }
    }

    @action reset = () => {
        this.setId('');
        this.setPwd('');
        this.setAutoLoginFlag(false);
    }

    @action logout = async () => {
        try {
            this.reset();
            this.setToken('');
            await AsyncStorage.removeItem('auth');
        } catch(err) {
            console.log(err);
            // err log 기록
            // error 모니터링 rollbar 검토중
        }
    }

    @action registerAutoLogin = async () => {

        if (this.autoLoginFlag) {
            try {
                await AsyncStorage.setItem('auth', 
                                        JSON.stringify({id: this.auth.id, pwd: this.auth.pwd}));
            } catch (err) {
                console.log(err);
                // 에러 로그 기록
                // error 모니터링 rollbar 검토중
            }
        }
    }

}
