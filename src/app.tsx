import { useState } from 'preact/hooks'
import preactLogo from './assets/preact.svg'
import useLocationResults from '../hooks/useLocationResults'
import './app.css'

export function App() {
	const [count, setCount] = useState(0);
	const { results, loading } = useLocationResults('delhi');

	return (
		<>
			<h1 className="text-3xl font-bold underline">
				Hello world!
			</h1>
			<div class='flex-wrap flex place-content-around'>
				<a href="https://vitejs.dev" target="_blank">
					<img src="/vite.svg" class="logo" alt="Vite logo" />
				</a>
				<a href="https://preactjs.com" target="_blank">
					<img src={preactLogo} class="logo preact" alt="Preact logo" />
				</a>
			</div>
			<h1>Vite + Preact</h1>
			<div class="card">
				<button onClick={() => setCount((count) => count + 1)}>
					count is {count}
				</button>
				<p>
					Edit <code>src/app.tsx</code> and save to test HMR
				</p>
			</div>
			<p class="read-the-docs">
				Click on the Vite and Preact logos to learn more
			</p>
			<div>
				{loading ? (
					<p>Loading...</p>
				) : (
					<ul>
						{results.map((result) => (
							<li>{result.name}</li>
						))}
					</ul>
				)}
			</div>
		</>
	)
}
