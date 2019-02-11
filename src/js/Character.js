/**
 *  Создание персонажа
 *
 * @param {string} name - Имя персонажа
 * @param {string} type - Тип персонажа
 *
 */

function Character(name, type) {
  this.name = name;
  this.type = type;
  this.health = 100;
  this.attack = 10;
  this.defence = 40;
}

function getDamage(points = 0) {
  const damage = points * (1 - this.defence / 100);
  const healthRest = this.health - damage;
  this.health = healthRest > 0 ? healthRest : 0;

  return this;
}

Character.prototype.damage = getDamage;

export default Character;
