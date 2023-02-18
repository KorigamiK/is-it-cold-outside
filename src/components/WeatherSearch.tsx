import { ILocation } from "../app";
import LocationCard from "./LocationCard";
import Search from "./Search";

export type SearchProps = {
    addLocation: (location: ILocation) => void;
    removeLocation: (id: string) => void;
}

const WeatherSearch = (props: SearchProps) => {
    return (
        <div class="w-full sm:w-1/2 bg-primary text-black space-y-5 py-8">
            <Search {...props} />
            <LocationCard />
            <LocationCard />
        </div>
    )
}

export default WeatherSearch;