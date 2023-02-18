import './app.css'

export function App() {
	return (
		<>
			<h1>But Is It Cold Outside?</h1>
			<main class='flex flex-wrap min-h-[70vh]'>
				<div class='w-full sm:w-1/2 bg-primary'>
					Search a location
				</div>
				<div class='w-full sm:w-1/2 bg-primary-50'>
					Weather data goes here
				</div>
			</main>
		</>
	)
}
