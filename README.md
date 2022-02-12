# 5e-srd-sdk

This is a simple SDK for interfacing with the Dungeons and Dragons 5th Edition SRD API found [here](https://www.dnd5eapi.co).

Currently it supports basic Spell finding functionality:
To install run the command 'npm install @thebadams/5e-srd-sdk';

To import the Spell module, insert the following line in your file:

## Spell Class
```typescript
import { Spell } from '@thebadams/5e-srd-sdk';
```
### FindAll Method
```typescript

//returns an axios data response if successfull, the string 'There was an error connecting to the API' if unsuccessful;

Spell.FindAll().then(data => console.log(data));
```

### GetByIndex
Accepts a string as a parameter, that should be the index of the spell on the API.
```typescript
Spell.GetByIndex('acid-arrow').then(data => console.log(data));
```

### FindByLevel
Accepts an array of spell levels, the numbers 0-9
```typescript
Spell.FindByLevel([0, 5]).then(data => console.log(data));
```

### FindBySchool
Accepts an array of spell schools

```typescript
Spell.FindBySchool(['Abjuration', 'Illusion']).then(data => console.log(data));
```

### Find
A catchall method that accepts a query config object and parses the information, returning the correct response based upon what is passed in.

```typescript
// The configuration object follows the following interface:
interface SpellQueryConfig {
	index?: string;
	level?: SpellLevel[] | SpellLevel
	school?: SpellSchools[] | SpellSchool
}

//EXAMPLES

Spell.Find({}); // returns the same response as Spell.FindAll()

Spell.Find({index: 'acid-arrow'}) // returns the same response as Spell.GetByIndex('acid-arrow');
//Any configuration object passed in with the index key will return a response as if Spell.GetByIndex was called.

Spell.Find({level: [1, 7], school: ['Abjuration', 'Conjuration']}) // Will return response of Spells in the schools listed & the levels listed.

Spell.Find({level: 1, school: 'Abjuration'}) // Will return response of Spells in Abjuration school of level 1
```
