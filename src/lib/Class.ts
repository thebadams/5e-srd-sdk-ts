import axios from 'axios';
import { SpellLevels } from './Spell';

export type ClassLevels = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 13 | 14 | 15 | 16 | 17 | 18 | 19 | 20;

export default abstract class Class {
	static readonly #BASE_URL = 'https://www.dnd5eapi.co/api/classes'

	public static async FindAll() {
		try {
			const response = await axios.get(this.#BASE_URL)
			return response.data;
		} catch (error) {
			if(error) {
				return 'There was an error connecting to the API'
			}
		}
	}

	public static async GetByIndex(index: string) {
		try {
			const response = await axios.get(`${this.#BASE_URL}/${index}`);
			return response.data;
		} catch (error) {
			if(error) {
				return `There was an error connecting to the API`;
			}
		}
	}

	public static async GetSubclassByIndex(index: string) {
		try {
			const response = await axios.get(`${this.#BASE_URL}/${index}/subclasses`);
			return response.data;
		} catch (error) {
			if(error) {
				return 'There was an error connecting to the API';
			}
		}
	}

	public static async GetSpellsByIndex(index: string) {
		try {
			const response = await axios.get(`${this.#BASE_URL}/${index}/spells`);
			return response.data;
		} catch (error) {
			if(error) {
				return 'There was an error connecting to the API';
			}
		}
	}

	public static async GetSpellcastingByIndex(index: string) {
		try {
			const response = await axios.get(`${this.#BASE_URL}/${index}/spellcasting`);
			return response.data;
		} catch (error) {
			if(error) {
				return 'There was an error connecting to the API';
			}
		}
	}

	public static async GetFeaturesByIndex(index: string) {
		try {
			const response = await axios.get(`${this.#BASE_URL}/${index}/features`);
			return response.data;
		} catch (error) {
			if(error) {
				return 'There was an error connecting to the API';
			}
		}
	}

	public static async GetProficienciesByIndex(index: string) {
		try {
			const response = await axios.get(`${this.#BASE_URL}/${index}/proficiencies`);
			return response.data;
		} catch (error) {
			if(error) {
				return 'There was an error connecting to the API';
			}
		}
	}

	public static async GetMulticlassingByIndex(index: string) {
		try {
			const response = await axios.get(`${this.#BASE_URL}/${index}/multi-classing`);
			return response.data;
			
		} catch (error) {
			if(error) {
				return 'There was an error connecting to the API';
			}
		}
	}

	public static async GetAllLevelsInfoByIndex(index: string) {
		try {
			const response = await axios.get(`${this.#BASE_URL}/${index}/levels`);
			return response.data
		} catch (error) {
			if(error) {
				return 'There was an error connecting to the API';
			}
		}
	}

	public static async GetLevelInfoByIndex(index: string, level: ClassLevels) {
		try {
			const response = await axios.get(`${this.#BASE_URL}/${index}/levels/${level}`);
			return response.data;
		} catch (error) {
			if(error) {
				return `There was an error connecting to the API`;
			}
		}
	}

	public static async GetFeaturesByLevel(index: string, level: ClassLevels) {
		try {
			const response = await axios.get(`${this.#BASE_URL}/${index}/levels/${level}/features`);
			return response.data;
		} catch (error) {
			if(error) {
				return 'There was an error connecting to the API'
			}	
		}
	}

	public static async GetSpellsByLevel(index: string, level: SpellLevels) {
		try {
			const response = await axios.get(`${this.#BASE_URL}/${index}/levels/${level}/spells`);
			return response.data;
		} catch (error) {
			if(error) {
				return 'There was an error connecting to the API';
			}
		}
	}
}

