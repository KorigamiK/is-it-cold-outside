import { useStore } from "../store";

type Props = {}

const WeatherData = ({ }: Props) => {
	const [selectedLocation] = useStore.selectedLocation();
	const [locations] = useStore.locations();

	const forecastData = locations.find((location) => location.city.coord.lat === selectedLocation?.lat && location.city.coord.lon === selectedLocation?.lon);

	const location = forecastData?.list[0];

	return (
		<div class="w-full min-h-[50vh] py-8 sm:w-1/2 bg-primary-50 px-4 text-black" id='weather-data'>
			{!location ? (
				<div class="flex flex-col items-center justify-center h-full">
					<h1 class="text-2xl text-neutral-700 font-bold">Select a location</h1>
					<p class="text-lg text-neutral-400">Search for a location and select one to see the weather</p>
				</div>
			) : (
				<>
					<div class="flex bg-gray-100 rounded-lg shadow-lg flex-col items-center justify-center p-6">
						<h1 class="text-4xl font-bold">{forecastData.city.name}</h1>
						<p class="text-xl">{location.weather[0].description}</p>
						<h1 class="text-4xl font-bold">{location.main.temp}°C</h1>
					</div>
					<div class="flex bg-gray-100 rounded-lg shadow-lg flex-col items-center p-6 justify-center mt-4">
						<h1 class="text-2xl font-bold">Feels like {location.main.feels_like}°C</h1>
						<p class="text-lg">Humidity: {location.main.humidity}%</p>
						<p class="text-lg">Wind: {location.wind.speed}m/s</p>
					</div>
					<div class="bg-gray-100 flex rounded-lg shadow-lg flex-col items-center p-6 justify-center mt-4">
						<h1 class="text-2xl font-bold">Sunrise: {new Date(forecastData.city.sunrise * 1000).toLocaleTimeString()}</h1>
						<p class="text-lg">Sunset: {new Date(forecastData.city.sunset * 1000).toLocaleTimeString()}</p>
					</div>
					<div class="bg-gray-100 flex rounded-lg shadow-lg flex-col items-center p-6 justify-center mt-4">
						<h1 class="text-2xl font-bold">Min: {location.main.temp_min}°C</h1>
						<p class="text-lg">Max: {location.main.temp_max}°C</p>
					</div>

					{/* Carousel of forecast list */}
					<div class="flex flex-col items-center justify-center mt-4">
						<h1 class="text-2xl font-bold">Forecast</h1>
						<div class="mt-4 w-full whitespace-nowrap overflow-x-auto space-x-4">
							{forecastData.list.map((forecast) => (
								<div class="inline-block rounded-lg shadow-lg p-2 items-center bg-gray-100 justify-center">
									<h1 class="text-xl font-bold">{forecast.main.temp}°C</h1>
									<p class="text-lg">{forecast.weather[0].description}</p>
									<p class="text-lg">{new Date(forecast.dt * 1000).toLocaleTimeString()}</p>
									{/* week day */}
									<p class="text-lg">{new Date(forecast.dt * 1000).toLocaleDateString()}</p>
								</div>
							))}
						</div>
					</div>



				</>
			)}
		</div>
	)
};

export default WeatherData;
