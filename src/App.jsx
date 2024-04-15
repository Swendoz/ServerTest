import React from "react";
import { useState } from "react";

function App() {
	const [count, setCount] = useState(0);

	const increment = () => {
		setCount(count + 1);
	};

	const zort = (zort) => {
		console.log("Zort: " + zort);
	};

	zort(process.env.REACT_APP_ZORT);

	const decrement = () => {
		setCount(count - 1);
	};

	return (
		<div className="App">
			<p>{count}</p>
			<button onClick={increment}>+</button>
			<button onClick={decrement}>-</button>
		</div>
	);
}

export default App;
