import { FiSearch } from "react-icons/fi";
import { useState } from 'preact/hooks'
import useLocationResults from '../../hooks/useLocationResults'
import { openWeatherMap } from '../../lib/openweathermap'
import { useStore } from "../store";

const Search = (_props: {}) => {
	const [search, setSearch] = useState("");
	const { results } = useLocationResults(search);
	const [showResults, setShowResults] = useState(false);
	const [locations, setLocations] = useStore.locations();
	const [_, setSelectedLocation] = useStore.selectedLocation();

	return (
		<div>
			{/* Search Bar */}
			<div className="relative w-1/2 mx-auto rounded-lg shadow-md">
				<div class="absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none">
					<FiSearch color="grey" size={"18"} />
				</div>
				<input
					placeholder="Search a place"
					className="w-full bg-white pl-10 pr-5 py-3 rounded-lg text-lg"
					value={search}
					onChange={(e) => setSearch((e.target as HTMLInputElement).value || '')}
					onClick={() => setShowResults(true)}
				/>
			</div>

			{/* Search Results */}
			<div className="relative w-1/2 mt-2 mx-auto">
				{/* {loading && <p>Loading...</p>} */}
				<div class='absolute w-full'>
					{showResults && results.map((item) => (
						<a
							className="block bg-white shadow-md p-1 my-1 hover:shadow-lg hover:bg-gray-100 rounded-lg cursor-pointer transition duration-300 ease-in-out"
							onClick={async () => {
								console.log('hi')
								const data = await openWeatherMap.getWeatherByCoordinates(item.lat, item.lon);
								setLocations([...locations, data]);
								setSearch("");
								setShowResults(false);
								setSelectedLocation(data.coord);
							}}
							href="#weather-data"
						>
							<p className="text-lg font-semibold">{item.name}</p>
							<p className="text-sm">{item.state}, {item.country}</p>
						</a>
					))}
				</div>
			</div>
		</div>
	)
}

export default Search;
