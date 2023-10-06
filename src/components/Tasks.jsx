import Task from './Task';

const Tasks = ({ tasks, onTaskDelete, onTaskToggle }) => {
	return (
		<ul>
			{tasks.map((task, index) => (
				<Task index={index} task={task} onTaskDelete={onTaskDelete} onTaskToggle={onTaskToggle}></Task>
			))}
		</ul>
	);
};

export default Tasks;
