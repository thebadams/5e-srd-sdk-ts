import Spell from './lib/Spell.js';
import Class from './lib/Class.js';

//Class.FindAll()
// Class.FindAll()
// .then(data => console.log(data)) // should log all classes in the srd

//Class.GetByIndex('bard')
Class.GetByIndex('bard')
.then(data => console.log(data)) // should log information about the bard class

export { Spell, Class };