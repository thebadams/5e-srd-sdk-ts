import Spell from './lib/Spell.js';
import Class from './lib/Class.js';

//Class.FindAll()
// Class.FindAll()
// .then(data => console.log(data)) // should log all classes in the srd

//Class.GetByIndex('bard')
// Class.GetByIndex('bard')
// .then(data => console.log(data)) // should log information about the bard class

//Class.GetSubclassesByIndex('bard');
//Class.GetSubclassByIndex('bard')
//.then(data => console.log(data)); // should log bard's subclasses in the srd

//Class.GetClassSpellsByIndex('bard')
Class.GetClassSpellsByIndex('bard')
.then(data => console.log(data)); // should log bard's class spells
export { Spell, Class };