import { useEffect, useState } from 'react'
import { AddTask, ShowTask, Header } from './components'

const App = () => {
  var today = new Date()
  var date =
    today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate()
  var time =
    today.getHours() + ':' + today.getMinutes() + '-' + today.getSeconds()
  var dateTime = date + ' ' + time
  const [theme, setTheme] = useState(
    JSON.parse(localStorage.getItem('theme')) || 'light'
  )
  const [taskList, setTaskList] = useState(
    JSON.parse(localStorage.getItem('tasklist')) || []
  )
  const [task, setTask] = useState({})

  const addTasks = (e) => {
    e.preventDefault()
    if (!task.title) return

    if (task.id) {
      const updateList = taskList.map((todo) =>
        todo.id === task.id
          ? { id: task.id, title: task.title, hour: dateTime }
          : todo
      )
      setTaskList(updateList)
      setTask({})
    } else {
      const task = {
        id: Date.now(),
        title: e.target.task.value,
        hour: dateTime,
      }
      setTaskList([...taskList, task])
      setTask({})
    }
  }

  function eraseBtn(id) {
    const updatedTaskList = taskList.filter((items) => items.id !== id)
    setTaskList(updatedTaskList)
  }

  function clearAllItem() {
    setTaskList([])
  }

  function editTask(id) {
    const editTask = taskList.find((item) => item.id === id)
    setTask(editTask)
  }

  useEffect(() => {
    localStorage.setItem('tasklist', JSON.stringify(taskList))
  }, [taskList])
  return (
    <div className='App'>
      <Header clearAllItem={clearAllItem} theme={theme} setTheme={setTheme} />
      <AddTask addTasks={addTasks} task={task} setTask={setTask} />
      <ShowTask
        taskList={taskList}
        eraseBtn={eraseBtn}
        clearAllItem={clearAllItem}
        editTask={editTask}
      />
    </div>
  )
}

export default App
