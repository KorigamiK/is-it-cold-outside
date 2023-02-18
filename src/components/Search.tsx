import { FiSearch } from "react-icons/fi";
import { useState } from 'preact/hooks'
import useLocationResults from '../../hooks/useLocationResults'
import { SearchProps } from "./WeatherSearch";



const Search = (props: SearchProps) => {
    const [search, setSearch] = useState("");
    const [showResults, setShowResults] = useState(false);
    const { results, loading } = useLocationResults(search);

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
                    onfocusin={() => setShowResults(true)}
                    onfocusout={() => setShowResults(false)}
                />
            </div>

            {/* Search Results */}
            <div className="w-1/2 mt-2 mx-auto">
                {loading && <p>Loading...</p>}
                {showResults && results.map((item) => (
                    <div
                        className="bg-white shadow-md p-1 my-1 hover:shadow-lg hover:bg-gray-100 rounded-lg cursor-pointer transition duration-300 ease-in-out"
                        onClick={() => {
                            props.addLocation({ ...item, id: (item.lat + item.lon).toString() });
                            setSearch("");
                            setShowResults(false);
                        }}
                    >
                        <p className="text-lg font-semibold">{item.name}</p>
                        <p className="text-sm">{item.state}, {item.country}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Search;