import { test } from '@jest/globals';
import { expect } from '@jest/globals';
import Team from '../js/Team';


test('check adding new character', () => {
  const team = new Team();
  team.add('Magician');
  expect(team.members.has('Magician')).toBe(true);
})

test('check error adding new character', () => {
  const team = new Team();
  team.add('Magician');
  expect(() => team.add('Magician')).toThrow('Такой объект уже существует');
})

test('check adding several characters and converting to array', () => {
  const team = new Team();
  team.addAll('Magician', 'Magician', 'Swordsman');
  expect(team.toArray()).toEqual(['Magician', 'Swordsman']);
})

