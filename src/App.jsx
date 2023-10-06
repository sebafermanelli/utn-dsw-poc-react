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
		setTasks([...tasks, { text: taskInput, completed: false }]);
		setTaskInput('');
	};

	const handleToggleTask = (index) => {
    const updatedTasks = tasks.map((task, i) =>
      i === index ? { ...task, completed: !task.completed } : task
    );
    setTasks(updatedTasks);
  };

	const handleDeleteTask = (index) => {
    const updatedTasks = tasks.filter((task, i) => i !== index);
    setTasks(updatedTasks);
  };

	return (
		<>
			<h1>To-Do List</h1>
			<input type="text" value={taskInput} onChange={handleTaskInputChange} placeholder="Ingresa una tarea" />
			<button onClick={handleAddTask}>Agregar tarea</button>

			<Tasks tasks={tasks} onTaskDelete={handleDeleteTask} onTaskToggle={handleToggleTask}></Tasks>

			<a href="https://github.com/sebafermanelli/react-poc" target="_blank">
				GitHub
			</a>
		</>
	);
}

export default App;
