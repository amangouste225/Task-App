export const Task = ({ editTask, taskList, eraseBtn }) => {
  return (
    <li className='task'>
      <div className='todo'>
        <span style={{ fontWeight: '600' }}>{taskList.title}</span>
        <span>{taskList.hour}</span>
      </div>
      <div>
        <i
          className='bi bi-pencil-square'
          onClick={() => editTask(taskList.id)}
        ></i>
        <i className='bi bi-trash' onClick={() => eraseBtn(taskList.id)}></i>
      </div>
    </li>
  )
}
