export const AddTask = ({ addTasks, setTask, task }) => {
  return (
    <div className='container'>
      <div className='addTask'>
        <form onSubmit={addTasks}>
          <input
            name='task'
            type='text'
            maxLength='25'
            placeholder='add task'
            autoComplete='off'
            value={task.title || ''}
            onChange={(e) => setTask({ ...task, title: e.target.value })}
          />
          <button type='submit' className='btn'>
            {task.id ? 'Update' : 'Add'}
          </button>
        </form>
      </div>
    </div>
  )
}
