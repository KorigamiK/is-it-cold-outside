import "./app.css";
import WeatherData from "./components/WeatherData";
import WeatherSearch from "./components/WeatherSearch";

export function App() {
    return (
        <>
            <h1 class="py-10">But Is It Cold Outside?</h1>
            <main class="flex flex-wrap min-h-[70vh]">
                <WeatherSearch />
                <WeatherData />
            </main>
        </>
    );
}
