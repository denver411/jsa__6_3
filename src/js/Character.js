import getDamage from './getDamage';

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

Character.prototype.damage = getDamage;

export default Character;
