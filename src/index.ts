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

//Class.GetSpellsByIndex('bard')
// Class.GetSpellsByIndex('bard')
// .then(data => console.log(data)); // should log bard's class spells

//Class.GetSpellcastingByIndex('bard')
//Class.GetSpellcastingByIndex('bard')
//.then(data => console.log(data)); // should log bard's spellcasting ability information


//Class.GetFeaturesByIndex('bard')
///Class.GetFeaturesByIndex('bard')
//.then(data => console.log(data)); // should log bard's features

//Class.GetProficienciesByIndex('bard')
//Class.GetProficienciesByIndex('bard')
//.then(data => console.log(data)); // should log bard's proficienices

//Class.GetMulticlassingByIndex('bard);
//Class.GetMulticlassingByIndex('bard')
//.then(data => console.log(data)); // should log bard's multiclassing requirements

//Class.GetLevelInfoByIndex('bard');
Class.GetLevelsInfoByIndex('bard')
.then(data => console.log(data)); // should log bard's level information
export { Spell, Class };
