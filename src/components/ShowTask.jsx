import { Task } from './Task'

export const ShowTask = ({ editTask, taskList, eraseBtn, clearAllItem }) => {
  return (
    <div className='container'>
      <div className='showTask'>
        <div className='flex'>
          <div className='head'>
            <span className='title'> Todo</span>
            <span className='count'>{taskList.length}</span>
          </div>
          <button className='clearAll' onClick={() => clearAllItem()}>
            Clear All
          </button>
        </div>
        <ul>
          {taskList?.map((task) => (
            <Task
              taskList={task}
              key={task.id}
              eraseBtn={eraseBtn}
              editTask={editTask}
            />
          ))}
        </ul>
      </div>
    </div>
  )
}
