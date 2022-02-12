import axios from 'axios';

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
}

