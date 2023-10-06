const Task = ({ index, task, onTaskDelete, onTaskToggle }) => {
	return (
		<li key={index}>
			<span style={{ textDecoration: task.completed ? 'line-through' : 'none' }}>{task.text}</span>
			<button onClick={() => onTaskToggle(index)}>Marcar como {task.completed ? 'pendiente' : 'hecha'}</button>
			<button onClick={() => onTaskDelete(index)}>Eliminar</button>
		</li>
	);
};

export default Task;
