import { useState } from 'react';
import './App.css';
import Tasks from './components/Tasks';

function App() {
	const [tasks, setTasks] = useState([]);
	const [taskInput, setTaskInput] = useState('');

	const handleTaskInputChange = (e) => {
		setTaskInput(e.target.value);
	};

	const handleAddTask = () => {
		setTasks([...tasks, taskInput]);
		setTaskInput('');
	};

	return (
		<>
			<h1>To-Do List</h1>
			<input type="text" value={taskInput} onChange={handleTaskInputChange} placeholder="Ingresa una tarea" />
			<button onClick={handleAddTask}>Agregar tarea</button>

			<Tasks tasks={tasks}></Tasks>

			<a href="https://github.com/sebafermanelli/react-poc" target="_blank">
				GitHub
			</a>
		</>
	);
}

export default App;
