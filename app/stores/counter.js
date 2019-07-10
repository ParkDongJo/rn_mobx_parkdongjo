import { observable, action } from 'mobx';

export default class CounterStore {
    @observable number = 0;

    constructor(rootStore) {
        this.rootStore = rootStore;
    }

    @action increase = () => {
        console.log("num 증가 - ", this.number);
        this.number++;
    }

    @action decrease = () => {
        console.log("num 감소 - ", this.number);
        this.number--;
    }
}