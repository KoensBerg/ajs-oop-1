// импортируем все классы проекта
import Character from '../class-Character';
import Bowman from '../class-Bowman';
import Swordsman from '../class-Swordsman';
import Magician from '../class-Magician';
import Daemon from '../class-Daemon';
import Undead from '../class-Undead';
import Zombie from '../class-Zombie';

// Если тип имени персонажа != строка, должны получить ошибку
test.each([
  [Bowman],
  [Swordsman],
  [Magician],
  [Daemon],
  [Undead],
  [Zombie],
])(
  'throws on wrong type of personage name',
  (Data) => {
    const person = () => new Data(1234);
    const expected = 'Имя персонажа должно иметь тип -строка-';
    expect(person).toThrow(expected);
  },
);

// Если длина имени персонажа > 10 символов, должны получить ошибку
test.each([
  [Bowman],
  [Swordsman],
  [Magician],
  [Daemon],
  [Undead],
  [Zombie],
])(
  'throws on too long name of personage',
  (Data) => {
    const person = () => new Data('tooLongNameOfPersonage');
    const expected = 'Имя персонажа должно содержать от 2 до 10 символов';
    expect(person).toThrow(expected);
  },
);

// Если длина имени персонажа < 2 символов, должны получить ошибку
test.each([
  [Bowman],
  [Swordsman],
  [Magician],
  [Daemon],
  [Undead],
  [Zombie],
])(
  'throws on too short name of personage',
  (Data) => {
    const person = () => new Data('L');
    const expected = 'Имя персонажа должно содержать от 2 до 10 символов';
    expect(person).toThrow(expected);
  },
);

// Если тип нового персонажа отличен от разрешённых, должны получить ошибку
test('throws on wrong type of Character', () => {
  class NewClass extends Character {
    constructor(name) {
      super(name, 'WrongType', 25, 25);
    }
  }

  const newPerson = () => new NewClass('someName');
  const expected = 'Использован несуществующий тип персонажа';

  expect(newPerson).toThrow(expected);
});

// Если тип нового персонажа разрешён, будет создан новый персонаж указанного типа
test('shold be true type of Character', () => {
  const newPerson = new Bowman('someName');
  expect(newPerson.type).toBe('Bowman');
});
