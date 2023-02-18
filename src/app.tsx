import "./app.css";
import { GeocodingResponse } from "../lib/types";
import WeatherData from "./components/WeatherData";
import WeatherSearch from "./components/WeatherSearch";

export interface ILocation extends GeocodingResponse {
	id: string;
}

export function App() {
	return (
		<>
			<h1 class="py-10">But Is It Cold Outside?</h1>
			<main class="flex flex-wrap h-[80vh]">
				<WeatherSearch />
				<WeatherData />
			</main>
		</>
	);
}
