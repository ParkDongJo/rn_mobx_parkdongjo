
import { observable, action } from 'mobx';


export default class TruckListStore {
    @observable list = [];

    constructor(rootStore) {
        this.rootStore = rootStore;
    }

    @action addTruck(truck) {
      this.list.push({
        desc: truck.desc,
        num: truck.num,
      });
    }

    @action removeTruck(item) {
      this.list = this.list.filter((l) => {
        return l.num !== item.num;
      });
    }
}
