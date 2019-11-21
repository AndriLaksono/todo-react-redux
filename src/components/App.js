import React from 'react';
import '../App.css';
import Todos from './Todos';
import AddTodo from './AddTodo';

function App() {
	return (
		<div className="App">
			<header className="App-header">
				<AddTodo />
				<Todos />
			</header>
		</div>
	);
}

export default App;
