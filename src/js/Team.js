export default class Team {
  constructor() {
    this.members = new Set();
  }
  add(name) {
    if (this.members.has(name)) throw new Error('Такой объект уже существует');
    this.members.add(name);
  }
  addAll(...name) {
    name.forEach((item) => {
      this.members.add(item);
    })
  }
  toArray() {
    return Array.from(this.members);
  }
}