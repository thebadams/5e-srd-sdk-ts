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
}