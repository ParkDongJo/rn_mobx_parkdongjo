import { AsyncStorage, Alert } from 'react-native';
import { observable, action } from 'mobx';
import global from './../global/constants';
import { callApiByGet, callApiByPut } from './../global/functions';


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
        this.setList(this.sortTruckList(resp.data));
      }
      return resp;
    }

    @action seachTruck = async (value) => {
      const result = this.list.find((row) => row.licenseNumber === value);

      //찾는 데이터가 있을 시
      if (!!result) {
        this.setList([result]);

      //찾는 데이터가 없을 시
      } else {
        if (value == '') {
          await this.fetchTruckList();
        } else {
          this.setList([]);
        }
      }
    }

    @action getTruck = (vehicleIdx) => {
      return this.list.find((row) => row.vehicleIdx === vehicleIdx);
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

    @action updateTruck = async ({key, vehicleIdx}) => {
      const result = this.list.find((row) => row.vehicleIdx === vehicleIdx);
      let value = !result[key];
      let token = this.root.authStore.auth.token;

      let resp = await callApiByPut({
                        token: token,
                        param: {"status": value}, 
                        path: '/mobile/v1/users/self/vehicles/'+vehicleIdx+'/favorite'})

      if (resp.success) {
        result[key] = value;
        this.setList(this.sortTruckList(this.list));
      }

      return resp;
    }

    @action sortTruckList = (list) => {
      let _list = list.slice().sort((a, b) => {

        return b.favorite == true && a.favorite == false ?  1 // b 앞 > a 뒤
              : b.favorite == false && a.favorite == true ? -1 // b 뒤 > a 앞
              : 0;
      })

      return _list;
    }

}
