import type { GeocodingResponse } from './types'

class OpenWeatherMap {
	private static _instance: OpenWeatherMap;

	private apiKey: string;
	private weatherAPIUrl = 'https://api.openweathermap.org/data/2.5/weather?';
	private geocodingAPIUrl = 'http://api.openweathermap.org/geo/1.0/direct?';

	constructor(apiKey: string) {
		console.log('OpenWeatherMap constructor');
		if (apiKey === undefined)
			throw new Error('API key is required');
		this.apiKey = apiKey;
	}

	public static getInstance(apiKey: string): OpenWeatherMap {
		return this._instance || (this._instance = new this(apiKey));
	}

	public async getCityByQuery(query: string): Promise<GeocodingResponse[]> {
		const url = this.geocodingAPIUrl + new URLSearchParams({
			q: query,
			appid: this.apiKey,
			limit: '5',
		}).toString();
		const response = await fetch(url);
		return await response.json();
	}

	public async getWeatherByCity(query: string): Promise<string[]> {
		const url = `${this.weatherAPIUrl}?q=${query}&appid=${this.apiKey}`;
		const response = await fetch(url);
		const data = await response.json();
		return data.map((item: any) => item.name);
	}
}

export const openWeatherMap = OpenWeatherMap.getInstance(import.meta.env.VITE_OPEN_WEATHER_MAP_API_KEY as string);
