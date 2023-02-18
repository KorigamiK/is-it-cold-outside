import createStore from "teaful";
import { Coord, ForecastData } from "../../lib/types";

export interface IStore {
	locations: ForecastData[];
	selectedLocation: Coord | null;
}

const initialStore: IStore = {
	locations: [],
	selectedLocation: null,
};

export const { useStore, getStore } = createStore(initialStore);
