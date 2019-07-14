import { AsyncStorage, Alert } from 'react-native';
import { observable, action } from 'mobx';
import global from './../global/constants';
import { callApiByGet } from './../global/functions';


export default class TruckListStore {
    @observable list = [];
    tempList = [];

    constructor(rootStore) {
        this.root = rootStore;
    }

    @action setList = (list) => {
      if (!Array.isArray(list)) return;
      this.list = list;
    }

    @action fetchTruckList = async () => {
      let token = this.root.authStore.auth.token;

      let resp = await callApiByGet({token: token, path: '/mobile/v1/users/self/vehicles/'})

      if (resp.success) {
        this.setList(resp.data);
      }
      return resp;
    }

    @action seachTruck = (value) => {

      const result = this.list.find((row) => row.licenseNumber === value);

      //데이터가 있을 시
      if (!!result) {
        return [result];
      }
      //데이터가 없을 시
      if (value == '') {
        return this.list;
      } else {
        return [];
      }

    }

    @action addTruck = (truck) => {
      this.list.push({
        desc: truck.desc,
        num: truck.num,
      });
    }

    @action removeTruck = (item) => {
      this.list = this.list.filter((l) => {
        return l.num !== item.num;
      });
    }
}
