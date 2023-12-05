export default class Character {
  constructor(name, type) {
    if (typeof name !== 'string') {
      throw new Error('Имя персонажа должно иметь тип -строка-');
    } else if (name.length < 2 || name.length > 10) {
      throw new Error('Имя персонажа должно содержать от 2 до 10 символов');
    } else {
      this.name = name;
    }

    const types = ['Bowman', 'Swordsman', 'Magician', 'Daemon', 'Undead', 'Zombie'];

    if (!types.includes(type)) {
      throw new Error('Использован несуществующий тип персонажа');
    } else {
      this.type = type;
    }

    this.health = 100;
    this.level = 1;

    this.attack = undefined;
    this.defence = undefined;
  }
}
