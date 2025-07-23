// import React, { useState } from 'react'

// function ToDoList() {
//     const [tasks, setTasks] = useState([]);
//     const [newtask, setnewTask] = useState("")

//     function handelInputChange(event) {
//         setnewTask(event.target.value)

//     }
//     function addTask() {
//         setTasks(t => [...t, newtask]);
//         setnewTask("")
//     }
//     function deleteTask(index) {
//         const updatedTask = tasks.filter((_, i) => i !== index);
//         setTasks(updatedTask)

//     }
//     function moveTaskUp(index) {
//         if (index > 0) {
//             const updateTask = [...tasks];
//             [updateTask[index], updateTask[index - 1]] = [updateTask[index - 1], updateTask[index]];
//             setTasks(updateTask);
//         }
//     }
//     function moveTaskDown(index) {
//         if (index < tasks.length - 1) {
//             const updateTask = [...tasks];
//             [updateTask[index], updateTask[index + 1]] = [updateTask[index + 1], updateTask[index]];
//             setTasks(updateTask);
//         }
//     }

//     return (
//         <div className='to-do-list'>
//             <h1>To-Do-List</h1>
//             <div>
//                 <input type='text' placeholder='Enter a Task ...' onChange={handelInputChange} value={newtask} />
//                 <button className='add-task' onClick={addTask}>
//                     Add New Task
//                 </button>

//             </div>
//             <ol>
//                 {tasks.map((task, index) => <li key={index} >
//                     <span className='text'>{task}</span>
//                     <button onClick={() => deleteTask(index)} className='delete-button'>Delete</button>
//                     <button onClick={() => moveTaskUp(index)} className='move-up'>UP</button>

//                     <button onClick={() => moveTaskDown(index)} className='move-down'>Down</button>
//                 </li>)}
//             </ol>
//         </div>
//     )
// }


// export default ToDoList


