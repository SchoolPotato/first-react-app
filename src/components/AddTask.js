import { useState } from 'react'
// The AddTask form, used for adding tasks
// ...Duh
const AddTask = ({ onAdd }) => {
    const [text, setText] = useState('');
    const [day, setDay] = useState('');
    const [reminder, setReminder] = useState(false)

    const onSubmit = (e) => {
        // Prevent the submit button from reloading the page
        e.preventDefault()

        // If you submit and there is no text in the task field, alert the user that there needs to be one to add a task and then return
        if(!text) {
            alert('Please add a task.');
            return;
        }

        // Passes the fields to a function to add them to the list and then clears the fields
        onAdd({ text, day, reminder });

        setText('');
        setDay('');
        setReminder(false);
    }

    // Basic HTML form
    return (
        <form className='add-form' onSubmit={onSubmit}>
            <div className='form-control'>
                <label>Task</label>
                <input type='text' placeholder='Add Task' value={text} onChange={(e) => setText(e.target.value)} />
            </div>
            <div className='form-control'>
                <label>Day & Time</label>
                <input type='text' placeholder='Add Day and Time' value={day} onChange={(e) => setDay(e.target.value)} />
            </div>
            <div className='form-control form-control-check'>
                <label>Task</label>
                <input type='checkbox' checked={reminder} value={reminder} onChange={(e) => setReminder(e.currentTarget.checked)} />
            </div>

            <input type='submit' value='Save Task' className='btn btn-block' />
        </form>
    )
}

export default AddTask
