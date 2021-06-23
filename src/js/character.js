export default class Character {
  constructor(name, type, health = 100, level = 1, attack, defence) {
    this.name = name;
    this.type = type;
    this.health = health;
    this.level = level;
    this.attack = attack;
    this.defence = defence;
  }

  levelUp() {
    if (this.health > 0) {
      this.level = +this.level + 1;
      this.attack = +this.attack + (this.attack * 20) / 100;
      this.defence = +this.defence + (this.defence * 20) / 100;
      this.health = 100;
    } else return Error('Нельзя повысить level умершего');
    return this;
  }
}
