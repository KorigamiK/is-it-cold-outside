import { useState } from "preact/hooks";
import { GeocodingResponse } from "../lib/types";
import "./app.css";
import WeatherData from "./components/WeatherData";
import WeatherSearch from "./components/WeatherSearch";

export interface ILocation extends GeocodingResponse {
    id: string;
}

export function App() {
    const [locations, setLocations] = useState<ILocation[]>([]);
    const [selectedLocation, setSelectedLocation] = useState<ILocation | null>(
        null
    );

    const addLocation = (location: ILocation) => {
        setLocations((prev) => [...prev, location]);
    };

    const removeLocation = (id: string) => {
        setLocations((prev) => prev.filter((location) => location.id !== id));
    };

    return (
        <>
            <h1 class="py-10">But Is It Cold Outside?</h1>
            <main class="flex flex-wrap min-h-[70vh]">
                <WeatherSearch addLocation={addLocation} removeLocation={removeLocation} />
                <WeatherData />
            </main>
        </>
    );
}
