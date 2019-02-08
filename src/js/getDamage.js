/**
 *  Метод нанесения урона персонажу
 *
 * @param {number} points - величина наносимого урона
 *
 */

function getDamage(points = 0) {
  const damage = points * (1 - this.defence / 100);
  const healthRest = this.health - damage;
  this.health = healthRest > 0 ? healthRest : 0;

  return this;
}

export default getDamage;
