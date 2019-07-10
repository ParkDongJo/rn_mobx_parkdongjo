import TruckListStore from './trucks';
import CounterStore from './counter';

// export const stores = {
//     trucks: truckListStore,
//     counter: counterStore,
// };

export default class RootStore {
    constructor() {
        this.trucks = new TruckListStore(this)
        this.counter = new CounterStore(this)
    }
}