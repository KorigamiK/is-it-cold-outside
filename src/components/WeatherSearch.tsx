import { useStore } from "../store";
import LocationCard from "./LocationCard";
import Search from "./Search";

export type SearchProps = {
}

const WeatherSearch = (_props: SearchProps) => {
	const [locations] = useStore.locations();
	return (
		<div class="w-full sm:w-1/2 bg-primary text-black space-y-5 py-8" id='weather-search'>
			<Search />
			{locations.map((location) => (
				<LocationCard key={location.cod} location={location} />
			))}
		</div>
	)
}

export default WeatherSearch;
