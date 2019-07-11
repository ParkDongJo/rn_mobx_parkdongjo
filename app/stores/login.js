
import { observable, action } from 'mobx';


export default class LoginStore {
    @observable loading = false;
    @observable isLogin = false;
    @observable id = '';
    @observable pwd = '';

    constructor(rootStore) {
        this.rootStore = rootStore;
    }

    @action login = () => {

    }
    
    @computed vaildate = () => {

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
