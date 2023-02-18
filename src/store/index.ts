import createStore from "teaful";
import { Coord, LocationData } from "../../lib/types";

export interface IStore {
  locations: LocationData[];
  selectedLocation: Coord | null;
}

const initialStore: IStore = {
  locations: [],
  selectedLocation: null,
};

export const { useStore, getStore } = createStore(initialStore);
