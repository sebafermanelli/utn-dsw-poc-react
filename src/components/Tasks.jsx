import Task from './Task';

const Tasks = ({ tasks }) => {
	return (
		<ul>
			{tasks.map((task, index) => (
				<Task index={index} task={task}></Task>
			))}
		</ul>
	);
};

export default Tasks;
