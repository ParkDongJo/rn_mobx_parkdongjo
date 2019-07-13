import TruckListStore from './trucks';
import AuthStore from './auth';

// export const stores = {
//     trucks: truckListStore,
//     counter: counterStore,
// };

export default class RootStore {
    constructor() {
        this.trucksStore = new TruckListStore(this);
        this.authStore = new AuthStore(this);
    }
}