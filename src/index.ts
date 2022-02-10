import Spell from './lib/Spell.js';

//Spell.FindAll().then(res => console.log(res))
Spell.GetByIndex('acid-arrow').then(res => console.log(res));
Spell.GetByIndex('hell').then(res => console.log(res));