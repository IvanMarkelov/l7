import { action, computed, observable, makeObservable } from "mobx";

export default class DevelopersStore {
  devList = [
    { name: "Antony", sp: 12 },
    { name: "Max", sp: 10 },
    { name: "Leo", sp: 12 },
  ];

  newDev = { name: "", sp: 0 };

  getDev() {
    fetch("https://randomuser.me/api/")
      .then((res) => res.json())
      .then((json) => {
        if (json.results) {
          this.setDev(json.results);
        }
      });
  }

  setDev(results) {
    this.newDev.name = results[0].name.first;
    this.newDev.sp = parseInt(Math.round(Math.random() * 15));
  }

  constructor() {
    makeObservable(this, {
      devList: observable,
      newDev: observable,
      getDev: action.bound,
      setDev: action,
      totalSum: computed,
      topPerformer: computed,
      clearStoreList: action,
      addDev: action,
    });
  }

  get totalSum() {
    return this.devList.reduce((sum, { sp }) => (sum += sp), 0);
  }

  get topPerformer() {
    const maxSp = Math.max(...this.devList.map(({ sp }) => sp));
    return this.devList.find(({ sp, name }) => {
      if (maxSp === sp) {
        return name;
      }
    });
  }

  clearStoreList() {
    this.devList = [];
  }

  addDev(dev) {
    this.devList.push(dev);
  }
}
