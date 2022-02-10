import axios from 'axios';

export default abstract class Spell {
	static readonly #BASE_URL = 'https://www.dnd5eapi.co/api/spells';
	public static async FindAll() {
		const response = await axios.get(this.#BASE_URL)
		console.log(response);
	}
}