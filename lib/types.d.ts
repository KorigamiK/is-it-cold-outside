export interface GeocodingResponse {
	name: string;
	local_names?: LocalNames;
	lat: number;
	lon: number;
	country: string;
	state: string;
}

export interface LocalNames {
	en: string;
	ru?: string;
	th?: string;
	ar?: string;
	fr?: string;
	eo?: string;
	de?: string;
	ja?: string;
	pa?: string;
	my?: string;
	kn?: string;
	ms?: string;
	ur?: string;
	hi?: string;
	ku?: string;
	lv?: string;
	zh?: string;
	ml?: string;
	te?: string;
	cs?: string;
	es?: string;
	fa?: string;
	uk?: string;
	ko?: string;
	ne?: string;
	oc?: string;
	ta?: string;
	el?: string;
	pt?: string;
	bn?: string;
	he?: string;
}

export interface LocationData {
	coord: Coord;
	weather: Weather[];
	base: string;
	main: Main;
	visibility: number;
	wind: Wind;
	clouds: Clouds;
	dt: number;
	sys: Sys;
	timezone: number;
	id: number;
	name: string;
	cod: number;
}

export interface Coord {
	lon: number;
	lat: number;
}

export interface Weather {
	id: number;
	main: string;
	description: string;
	icon: string;
}

export interface Main {
	temp: number;
	feels_like: number;
	temp_min: number;
	temp_max: number;
	pressure: number;
	humidity: number;
}

export interface Wind {
	speed: number;
	deg: number;
	gust: number;
}

export interface Clouds {
	all: number;
}

export interface Sys {
	type: number;
	id: number;
	country: string;
	sunrise: number;
	sunset: number;
}

export interface ForecastData {
	cod: string
	message: number
	cnt: number
	list: List[]
	city: City
}

export interface List {
	dt: number
	main: Main
	weather: Weather[]
	clouds: Clouds
	wind: Wind
	visibility: number
	pop: number
	sys: Sys
	dt_txt: string
	rain?: Rain
}

export interface Main {
	temp: number
	feels_like: number
	temp_min: number
	temp_max: number
	pressure: number
	sea_level: number
	grnd_level: number
	humidity: number
	temp_kf: number
}

export interface Weather {
	id: number
	main: string
	description: string
	icon: string
}

export interface Clouds {
	all: number
}

export interface Wind {
	speed: number
	deg: number
	gust: number
}

export interface Sys {
	pod: string
}

export interface Rain {
	"3h": number
}

export interface City {
	id: number
	name: string
	coord: Coord
	country: string
	population: number
	timezone: number
	sunrise: number
	sunset: number
}
