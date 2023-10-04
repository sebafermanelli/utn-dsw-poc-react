const Task = ({ task, index }) => {
	return <li key={index}>{task}</li>;
};

export default Task;
