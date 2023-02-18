import "./LocationCard.css";
import { BsSun, BsCloudy } from "react-icons/bs";
import { IoRainyOutline } from "react-icons/io5";
import { ForecastData } from "../../lib/types";
import { useStore } from "../store";

type Variants = "sunny" | "rainy" | "cloudy";

const variants = {
	sunny: {
		background: "sunny",
		icon: () => <BsSun size="50" color="orange" />,
	},
	rainy: {
		background: "rain",
		icon: () => <IoRainyOutline size="50" color="blue" />,
	},
	cloudy: {
		background: "cloudy",
		icon: () => <BsCloudy size="50" color="blue" />,
	},
};

export default function LocationCard({ location }: { location: ForecastData }) {
	const [_, setSelectedLocation] = useStore.selectedLocation();
	let variant: Variants = 'sunny';
	if (location.list[0].weather[0].main.toLocaleLowerCase().includes('rain')) variant = 'rainy';
	if (location.list[0].weather[0].main.toLocaleLowerCase().includes('sun')) variant = 'sunny';
	if (location.list[0].weather[0].main.toLocaleLowerCase().includes('cloud')) variant = 'cloudy';

	return (
		<div
			class={`w-1/2 mx-auto rounded-lg shadow-lg flex justify-between p-5 items-center ${variants[variant].background} cursor-pointer transition duration-300 ease-in-out hover:shadow-xl hover:scale-105`}
			onClick={() => {
				console.log(location)
				setSelectedLocation(location.city.coord);
			}}
		>
			<div className="text-left">
				<h2 className="font-normal text-4xl">{location.list[0].main.temp}°C</h2>
				<h4 className="text-gray-500">{location.city.name}</h4>
			</div>
			{variants[variant].icon()}
		</div>
	);
}
