import { useState } from "react"



const AddTask = ({ onAdd, clickAdd }) => {
    const [text, setText] = useState('');
    const [day, setDay] = useState('');
    const [reminder, setReminder] = useState(false);

    const onSubmit = (e) => {
        e.preventDefault();

        if(!text) {
            alert('Please add a task');
        }

        onAdd({text, day, reminder});
        setText('');
        setDay('');
        setReminder(false);
        clickAdd(false);
    }

    return (
        <form className="add-form" onSubmit={onSubmit}>
            <div className="form-control">
                <label>Task</label>
                <input type="text" placeholder="Add Task" value={text} onChange={(e) => setText(e.target.value)}></input>
            </div>
            <div className="form-control">
                <label>Day and Time</label>
                <input type="text" placeholder="Add Day and Time" value={day} onChange={(e) => setDay(e.target.value)}></input>
            </div>
            <div className="form-control form-control-check">
                <label>Set Reminder</label>
                <input checked={reminder} type="checkbox" value={reminder} onChange={(e) => setReminder(e.currentTarget.checked)}></input>
            </div>
            <input type="submit" className="btn btn-block" value="Save Task" />
        </form>
    )
}

export default AddTask
