
import { observable, action } from 'mobx';


export default class TruckListStore {
    @observable list = [{'vehicleIdx': 0, 
                        'description': "멋있는 초록색 수거 차량", 
                        'favorite': true,
                        'licenseNumber': "12어4942",
                        'capacity':"2.5t"
                      }];

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
