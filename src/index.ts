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

//Class.GetAllLevelInfoByIndex('bard');
//Class.GetAllLevelsInfoByIndex('bard')
//.then(data => console.log(data)); // should log bard's level information

//Class.GetLevelInfoByIndex('bard', 4)
//Class.GetLevelInfoByIndex('bard', 4)
//.then(data => console.log(data)); // should log bard' level 4 information

//Class.GetFeaturesByLevel('bard', 4)
//Class.GetFeaturesByLevel('bard', 4)
//.then(data => console.log(data)); // shoud log bard's level 4 features/

//Class.GetSpellsByLevel('bard', 4)
//Class.GetSpellsByLevel('bard', 9)
//.then(data => console.log(data));

//Testing Refactor: Spell.FindAll()

// Spell.FindAll()
// .then(data => console.log(data));

// Spell.GetByIndex('acid-arrow')
// .then(data => console.log(data));

Spell.FindByLevels([1,9])
.then(data => console.log(data));

export { Spell, Class };
