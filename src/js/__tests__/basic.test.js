import Bowerman from '../bowerman';
import Daemon from '../daemon';
import Magician from '../magician';
import Swordsman from '../swordsman';
import Undead from '../undead';
import Zombie from '../zombie';

test('should create players', () => {
  const bowermanPlayer = {
    name: 'Bowerman', type: 'Bowerman', health: 100, level: 1, attack: 25, defence: 25,
  };
  const daemonPlayer = {
    name: 'Daemon', type: 'Daemon', health: 100, level: 1, attack: 10, defence: 40,
  };
  const magicianPlayer = {
    name: 'Magician', type: 'Magician', health: 100, level: 1, attack: 10, defence: 40,
  };
  const swordsmanPlayer = {
    name: 'Swordsman', type: 'Swordsman', health: 100, level: 1, attack: 40, defence: 10,
  };
  const undeadPlayer = {
    name: 'Undead', type: 'Undead', health: 100, level: 1, attack: 25, defence: 25,
  };
  const zombiePlayer = {
    name: 'Zombie', type: 'Zombie', health: 100, level: 1, attack: 40, defence: 10,
  };
  expect(new Bowerman('Bowerman')).toEqual(bowermanPlayer);
  expect(new Bowerman('Bowerman9999999')).toEqual(new Error('Неверные данные'));
  expect(new Daemon('Daemon')).toEqual(daemonPlayer);
  expect(new Magician('Magician')).toEqual(magicianPlayer);
  expect(new Swordsman('Swordsman')).toEqual(swordsmanPlayer);
  expect(new Undead('Undead')).toEqual(undeadPlayer);
  expect(new Zombie('Zombie')).toEqual(zombiePlayer);
  const damagedBowerman = new Bowerman('Bowerman');
  damagedBowerman.health = 60;
  damagedBowerman.levelUp();
  const bowermanPlayer2 = {
    name: 'Bowerman', type: 'Bowerman', health: 100, level: 2, attack: 30, defence: 30,
  };
  expect(damagedBowerman).toEqual(bowermanPlayer2);
  const diedBowerman = new Bowerman('Bowerman');
  diedBowerman.health = 0;
  expect(diedBowerman.levelUp()).toEqual(Error('Нельзя повысить level умершего'));
  damagedBowerman.damage(10);
  const bowermanPlayer3 = {
    name: 'Bowerman', type: 'Bowerman', health: 93, level: 2, attack: 30, defence: 30,
  };
  expect(damagedBowerman).toEqual(bowermanPlayer3);
  expect(diedBowerman.damage(10)).toEqual(Error('Уже умер'));
});
