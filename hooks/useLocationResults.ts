import { openWeatherMap } from '../lib/openweathermap'
import { useState, useEffect } from 'preact/hooks'
import type { GeocodingResponse } from '../lib/types'

export default function useLocationResults(query: string) {
	const [results, setResults] = useState<GeocodingResponse[]>([])
	const [loading, setLoading] = useState(false)

	useEffect(() => {
		if (query === '') {
			setResults([])
			return
		}

		setLoading(true)
		openWeatherMap.getCityByQuery(query)
			.then((data) => {
				setResults(data)
			})
			.finally(() => {
				setLoading(false)
			})
	}, [query])

	return { results, loading }
}
