import { useRef } from "react";

function App() {
	const filter = useRef<HTMLDivElement | null>(null);

	const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		if (filter.current) {
			filter.current.innerText = event.target.value;
		}
		console.log(filter.current?.innerText);
	};

	return (
		<>
			<h2>Signal</h2>
			<input type="text" onChange={handleChange} />
			<div ref={filter} />
		</>
	);
}

export default App;


