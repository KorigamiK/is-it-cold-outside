export interface GeocodingResponse {
	name: string
	local_names?: LocalNames
	lat: number
	lon: number
	country: string
	state: string
}

export interface LocalNames {
	en: string
	ru?: string
	th?: string
	ar?: string
	fr?: string
	eo?: string
	de?: string
	ja?: string
	pa?: string
	my?: string
	kn?: string
	ms?: string
	ur?: string
	hi?: string
	ku?: string
	lv?: string
	zh?: string
	ml?: string
	te?: string
	cs?: string
	es?: string
	fa?: string
	uk?: string
	ko?: string
	ne?: string
	oc?: string
	ta?: string
	el?: string
	pt?: string
	bn?: string
	he?: string
}

