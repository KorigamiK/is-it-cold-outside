import type { ForecastData, GeocodingResponse, LocationData } from "./types";

class OpenWeatherMap {
	private static _instance: OpenWeatherMap;

	private apiKey: string;
	private weatherAPIUrl = "https://api.openweathermap.org/data/2.5/weather?";
	private geocodingAPIUrl = "https://api.openweathermap.org/geo/1.0/direct?";
	private forecaseAPIUrl = "https://api.openweathermap.org/data/2.5/forecast?";

	constructor(apiKey: string) {
		console.log("OpenWeatherMap constructor");
		if (apiKey === undefined) throw new Error("API key is required");
		this.apiKey = apiKey;
	}

	public static getInstance(apiKey: string): OpenWeatherMap {
		return this._instance || (this._instance = new this(apiKey));
	}

	public async getCityByQuery(query: string): Promise<GeocodingResponse[]> {
		const url =
			this.geocodingAPIUrl +
			new URLSearchParams({
				q: query,
				appid: this.apiKey,
				limit: "3",
			}).toString();
		const response = await fetch(url);
		return await response.json();
	}

	public async getWeatherByCoordinates(
		lat: number,
		lon: number
	): Promise<LocationData> {
		const url =
			this.weatherAPIUrl +
			new URLSearchParams({
				lat: lat.toString(),
				lon: lon.toString(),
				appid: this.apiKey,
				units: "metric",
			}).toString();
		const response = await fetch(url);
		return await response.json();
	}

	public async getForecastByCoordinates(
		lat: number,
		lon: number
	): Promise<ForecastData> {
		const url =
			this.forecaseAPIUrl +
			new URLSearchParams({
				lat: lat.toString(),
				lon: lon.toString(),
				appid: this.apiKey,
				units: "metric",
				cnt: "5",
			}).toString();
		const response = await fetch(url);
		const data = await response.json();
		console.log(data);
		return data;
	}
}

export const openWeatherMap = OpenWeatherMap.getInstance(
	import.meta.env.VITE_OPEN_WEATHER_MAP_API_KEY as string
);
