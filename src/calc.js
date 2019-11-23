export class User {
  constructor(name, age, death, aging) {
    this.name = name;
    this.age = age;
    this.death = death;
    this.aging = aging;
  }

  planetAge() {
    return Math.floor(this.age * this.aging);
  }

  deathClock() {
    let yearsLeft = Math.floor(this.aging * (this.death - this.age));
    let pastExp = Math.floor(this.aging * (this.age - this.death));
    if (yearsLeft < 0) {
      return pastExp;
    } else {
      return yearsLeft;
    }
  }
}
