import Character from './Character';

test('Создается персонаж с заданными свойствами', () => {
  const character = new Character('Hero', 'Swordsman');
  const expected = {
    name: 'Hero',
    type: 'Swordsman',
    health: 100,
    attack: 10,
    defence: 40,
  };

  expect(character).toEqual(expected);
});

test('Нанесение урона уменьшает health', () => {
  const character = new Character('Hero', 'Swordsman');
  character.damage(50);
  expect(character.health).toBe(70);
});

test('Нанесение чрезмерного урона не приводит к отрицательному health', () => {
  const character = new Character('Hero', 'Swordsman');
  character.damage(180);
  expect(character.health).toBe(0);
});

test('Вызов метода без параметров не наносит урон', () => {
  const character = new Character('Hero', 'Swordsman');
  character.damage();
  expect(character.health).toBe(100);
});

test('Метод damage возвращает объект персонажа', () => {
  const character = new Character('Hero', 'Swordsman');
  expect(character.damage(50)).toBe(character);
});
