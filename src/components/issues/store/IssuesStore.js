import { action, computed, observable, makeObservable } from "mobx";

export default class IssuesStore {
  issues = [];

  newIssue = { name: "", sp: 0 };

  //   getDev() {
  //     fetch("https://randomuser.me/api/")
  //       .then((res) => res.json())
  //       .then((json) => {
  //         if (json.results) {
  //           this.setDev(json.results);
  //         }
  //       });
  //   }

  getIssues = async () => {
    const result = await request;
    let res = await axios.get(
      "https://api.github.com/repos/IvanMarkelov/l7/issues"
    );
    axios.head;
    console.log("getIssues", res);
    console.log("getIssues", res.data);
    this.setState({ issues: res.data });
  };

  setDev(results) {
    this.newIssue.name = results[0].name.first;
    this.newIssue.sp = parseInt(Math.round(Math.random() * 15));
  }

  constructor() {
    makeObservable(this, {
      issues: observable,
      newDev: observable,
      getIssues: action,
      setDev: action,
      totalSum: computed,
      topPerformer: computed,
      clearStoreList: action,
      addDev: action,
    });
  }

  get totalSum() {
    return this.issues.reduce((sum, { sp }) => (sum += sp), 0);
  }

  get topPerformer() {
    const maxSp = Math.max(...this.issues.map(({ sp }) => sp));
    return this.issues.find(({ sp, name }) => {
      if (maxSp === sp) {
        return name;
      }
    });
  }

  clearStoreList() {
    this.issues = [];
  }

  addDev(dev) {
    this.issues.push(dev);
  }
}
