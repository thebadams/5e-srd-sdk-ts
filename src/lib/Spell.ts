import axios from 'axios';

export type SpellLevels = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9
// enum SPELL_LEVELS {
// 	CANTRIP,
// 	ONE,
// 	TWO,
// 	THREE,
// 	FOUR,
// 	FIVE,
// 	SIX,
// 	SEVEN,
// 	EIGHT,
// 	NINE
// }

export interface SpellsQueryConfig {
	school?: SpellSchools[] | SpellSchools;
	level?: SpellLevels[] | SpellLevels;
	index?: string;
}

export type SpellSchools = 'Abjuration' | 'Evocation' | 'Divination' | 'Necromancy' | 'Enchantment' | 'Transmutation' | 'Illusion' | 'Conjuration';
export default abstract class Spell {
	static readonly #BASE_URL = 'https://www.dnd5eapi.co/api/spells';
	public static async FindAll() {
		try {
			const response = await axios.get(this.#BASE_URL);
			return response.data
		} catch (error) {
			if(error) {
				return 'There was an error connecting to the API'
			}
		}
	}

	public static async GetByIndex(index: string) {
		try {
			const response = await axios.get(`${this.#BASE_URL}/${index}`);
			return response.data
		} catch (error) {
			if(error) {
				return 'There was an error connecting to the API'
			}
		}
	}

	public static async FindByLevels(levelsArray: SpellLevels[]) {
		const levelsString = levelsArray.join(',');
	//	console.log(levelsString);
		const url = `${this.#BASE_URL}?level=${levelsString}`;
		//console.log(url)
		try {
			const response = await axios.get(url);
			return response.data
		} catch (error) {
			if(error) {
				return 'There was an error connecting to the API';
			}
		}
	}

	public static async FindBySchool(schoolsArray: SpellSchools[]) {
		const schoolString = schoolsArray.join(',');
		const url = `${this.#BASE_URL}?school=${schoolString}`;
		try {
			const response = await axios.get(url);
			return response.data;
		} catch (error) {
			if(error) {
				return 'There was an error connecting to the API'
			}
		}
	}

	public static async Find(queryConfig: SpellsQueryConfig) {
		const queryArray = Object.entries(queryConfig);
		console.log(queryArray)
		if(queryArray.length === 0) {
			return this.FindAll();
		}
		let url = this.#BASE_URL;
		let queryString = '?'
		let queries: string[] = [];
		for(const [key, value] of queryArray) {
			if(key === 'index') {
				return this.GetByIndex(value);
			} else if(key === 'level' || key === 'school') {
				if(Array.isArray( value)) {
					const string = value.join(',');
					const query = `${key}=${string}`
					queries.push(query);
					
				} else {
					const query = `${key}=${value}`
					queries.push(query);
				}
			
			}
		}
		queryString = `${queryString}${queries.join('&')}`
		url = `${url}${queryString}`
		console.log(url)
		try {
			const response = await axios.get(url);
			return response.data
		} catch (error) {
			if (error) {
				return 'There was an error connecting to the API'
			}
		}
		

	}
}