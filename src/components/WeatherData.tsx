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
                    <h1 class="text-2xl font-bold">Select a location</h1>
                    <p class="text-lg">Search for a location and select one to see the weather</p>
                </div>
            ) : (
                <div class="flex flex-col items-center justify-center h-full">
                    <h1 class="text-4xl font-bold">{location.name}</h1>
                    <p class="text-xl">{location.weather[0].description}</p>
                    <h1 class="text-4xl font-bold">{location.main.temp}°C</h1>
                </div>

            )}
        </div>
    )
};

export default WeatherData;