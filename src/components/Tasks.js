import Task from './Task'

// The boilerplate emmet abreviation is rafce, Alex. rafce.

const Tasks = ({ tasks, onDelete, onToggle }) => {
    return (
        // would use setTasks() here
        <>
            {tasks.map((task) => (
            <Task key={task.id} task={task} onDelete={onDelete} onToggle={onToggle} />
            ))}
        </>
    )
}

export default Tasks
