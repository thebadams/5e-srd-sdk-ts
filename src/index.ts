import Spell from './lib/Spell.js';

//Spell.FindAll().then(res => console.log(res))
// Spell.GetByIndex('acid-arrow').then(res => console.log(res));
// Spell.GetByIndex('hell').then(res => console.log(res));

//Spell.FindByLevels([0]).then(res => console.log(res));

// Spell.FindBySchool(['Transmutation', 'Abjuration']).then(res => console.log(res));

Spell.Find({ index: 'acid-arrow', level: 1 }).then(data => console.log(data))

export { Spell };