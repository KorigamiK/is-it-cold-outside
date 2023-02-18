import { useStore } from "../store";

type Props = {}

const WeatherData = ({ }: Props) => {
    const [selectedLocation] = useStore.selectedLocation();
    const [locations] = useStore.locations();

    const location = locations.find((location) => location.coord.lat === selectedLocation?.lat && location.coord.lon === selectedLocation.lon);

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
                        <h1 class="text-4xl font-bold">{location.name}</h1>
                        <p class="text-xl">{location.weather[0].description}</p>
                        <h1 class="text-4xl font-bold">{location.main.temp}°C</h1>
                    </div>
                    <div class="flex bg-gray-100 rounded-lg shadow-lg flex-col items-center p-6 justify-center mt-4">
                        <h1 class="text-2xl font-bold">Feels like {location.main.feels_like}°C</h1>
                        <p class="text-lg">Humidity: {location.main.humidity}%</p>
                        <p class="text-lg">Wind: {location.wind.speed}m/s</p>
                    </div>
                    <div class="bg-gray-100 flex rounded-lg shadow-lg flex-col items-center p-6 justify-center mt-4">
                        <h1 class="text-2xl font-bold">Sunrise: {new Date(location.sys.sunrise * 1000).toLocaleTimeString()}</h1>
                        <p class="text-lg">Sunset: {new Date(location.sys.sunset * 1000).toLocaleTimeString()}</p>
                    </div>

                </>
            )}
        </div>
    )
};

export default WeatherData;