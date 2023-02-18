import { FiSearch } from "react-icons/fi";
import LocationCard from "./LocationCard";

const WeatherSearch = () => {
    return (
        <div class="w-full sm:w-1/2 bg-primary text-black space-y-5 py-8">
            <div className="relative w-1/2 mx-auto rounded-lg shadow-md">
                <div class="absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none">
                    <FiSearch color="grey" size={"18"} />
                </div>
                <input
                    placeholder={"Search a place"}
                    className="w-full bg-white pl-10 pr-5 py-3 rounded-lg text-lg"
                />
            </div>
            <LocationCard variant="cloudy" />
            <LocationCard variant="sunny" />
            <LocationCard variant="rainy" />
        </div>
    )
}

export default WeatherSearch;