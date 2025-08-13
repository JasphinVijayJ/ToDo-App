import { useState } from "react"
import ItemDisplay from "./ItemDisplay"

function InputArea() {

    const [task, setTask] = useState("")
    const [taskList, setTaskList] = useState([])

    const handleAddTask = () => {
        if (task.trim() !== "") {
            setTaskList([...taskList, task])
            setTask("")     // Clear input after adding
        }
    }

    const handleDelete = (indexToDelete) => {
        const updatedList = taskList.filter((_, index) => index !== indexToDelete)
        setTaskList(updatedList)
    }

    const handleEdit = (index, newEditedTask) => {
        const updatedList = [...taskList]
        updatedList[index] = newEditedTask
        setTaskList(updatedList)
    }

    return (
        <>
            <div className="inputcontainer">
                <input className="input-1" type="text" placeholder="Enter a task here" value={task} onChange={(event) => setTask(event.target.value)} />
                <button className="button-1" onClick={handleAddTask}>Add Task</button>
            </div>

            <ItemDisplay taskList={taskList} deleteTask={handleDelete} editTask={handleEdit} />
        </>
    )
}

export default InputArea