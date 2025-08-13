import { useState } from "react"

function ItemDisplay(props) {

    const [editIndex, setEditIndex] = useState(null)
    const [editedTask, setEditedTask] = useState("")

    const handleEditClick = (index) => {
        setEditIndex(index)
        setEditedTask(props.taskList[index])
    }

    const handleSaveClick = () => {
        if (editedTask.trim() !== "") {
            props.editTask(editIndex, editedTask)
            setEditIndex(null)
            setEditedTask("")
        }
    }

    return (
        <ol>
            {props.taskList.map((task, index) => (
                <li key={index}>
                    {(editIndex === index) ? (
                        <div className="displaybox">
                            <input className="input-1 input-2" type="text" value={editedTask} onChange={(e) => setEditedTask(e.target.value)} />
                            <button className="button-1 button-2" onClick={handleSaveClick}>Save</button>
                        </div>
                    ) : (
                        <div className="displaybox">
                            {task}
                            <button className="button-1 button-2 button-3" onClick={() => handleEditClick(index)}>Edit</button>
                            <button className="button-1 button-2 button-4" onClick={() => props.deleteTask(index)}>Delete</button>
                        </div>
                    )
                    }
                </li>
            ))}
        </ol>
    )
}

export default ItemDisplay