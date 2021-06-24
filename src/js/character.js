export default class Character {
  constructor(name, type, health = 100, level = 1) {
    if (name.length < 2 || name.length > 10) {
      return new Error('Неверные данные');
    }
    this.name = name;
    this.type = type;
    this.health = health;
    this.level = level;
    if (type === 'Bowerman') {
      this.attack = 25;
      this.defence = 25;
    } else if (type === 'Daemon') {
      this.attack = 10;
      this.defence = 40;
    } else if (type === 'Magician') {
      this.attack = 10;
      this.defence = 40;
    } else if (type === 'Swordsman') {
      this.attack = 40;
      this.defence = 10;
    } else if (type === 'Undead') {
      this.attack = 25;
      this.defence = 25;
    } else if (type === 'Zombie') {
      this.attack = 40;
      this.defence = 10;
    }
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

  damage(points) {
    if (this.health > 0) {
      this.health -= points * (1 - this.defence / 100);
    } else return Error('Уже умер');
    return this;
  }
}
