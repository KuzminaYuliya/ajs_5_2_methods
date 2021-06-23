import Bowerman from '../bowerman';
import Daemon from '../daemon';
import Magician from '../magician';
import Swordsman from '../swordsman';
import Undead from '../undead';
import Zombie from '../zombie';

test('should create players', () => {
  const bowermanPlayer = {
    name: 'testBowerman', type: 'Bowerman', health: 100, level: 1, attack: 25, defence: 25,
  };
  const daemonPlayer = {
    name: 'testDaemon', type: 'Daemon', health: 100, level: 1, attack: 10, defence: 40,
  };
  const magicianPlayer = {
    name: 'testMagician', type: 'Magician', health: 100, level: 1, attack: 10, defence: 40,
  };
  const swordsmanPlayer = {
    name: 'testSwordsman', type: 'Swordsman', health: 100, level: 1, attack: 40, defence: 10,
  };
  const undeadPlayer = {
    name: 'testUndead', type: 'Undead', health: 100, level: 1, attack: 25, defence: 25,
  };
  const zombiePlayer = {
    name: 'testZombie', type: 'Zombie', health: 100, level: 1, attack: 40, defence: 10,
  };
  expect(new Bowerman('testBowerman')).toEqual(bowermanPlayer);
  expect(new Daemon('testDaemon')).toEqual(daemonPlayer);
  expect(new Magician('testMagician')).toEqual(magicianPlayer);
  expect(new Swordsman('testSwordsman')).toEqual(swordsmanPlayer);
  expect(new Undead('testUndead')).toEqual(undeadPlayer);
  expect(new Zombie('testZombie')).toEqual(zombiePlayer);
  const damagedBowerman = new Bowerman('testBowerman');
  damagedBowerman.health = 60;
  damagedBowerman.levelUp();
  const bowermanPlayer2 = {
    name: 'testBowerman', type: 'Bowerman', health: 100, level: 2, attack: 30, defence: 30,
  };
  expect(damagedBowerman).toEqual(bowermanPlayer2);
  const diedBowerman = new Bowerman('testBowerman');
  diedBowerman.health = 0;
  diedBowerman.levelUp();
  expect(diedBowerman.levelUp()).toEqual(Error('Нельзя повысить level умершего'));
});
