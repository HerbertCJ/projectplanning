import { useState } from 'react';
import { useDispatch } from 'react-redux';
import {addTask} from '../features/projectsSlice/projectSlice'
import {toast} from 'react-toastify'

function Modal({data, setShowModal}) {
   const initialTaskData = {
    taskTitle: '',
    taskPrice: '',    
    id: data.id,
  }

  const dispatch = useDispatch()
  const [taskData, setTaskData] = useState(initialTaskData)
  
  const handleSubmit = (e) => {
    e.preventDefault()
    if(!taskData.taskTitle || !taskData.taskPrice) {
      return;
    }
    if(taskData.taskPrice <= data.budget) {      
      dispatch(addTask(taskData))
      setShowModal(false)      
    }
    else {
      toast.error('Task price is over budget')
    }
    
  }

  const handleChange = (e) => {
    const name = e.target.name
    const value = e.target.value
    setTaskData({...taskData, [name] : value})    
  }

  const handleClose = () => {
    setShowModal(false)
    setTaskData(initialTaskData)
  }

  return (
    <div className='modal-task'>
          <h4>Add task to your project</h4>        
          <form className='form-task' onSubmit={handleSubmit}>
            <label htmlFor="taskTitle">Title</label>
            <input type="text" name="taskTitle" id="taskTitle" onChange={handleChange} value={taskData.taskTitle} required maxLength='30' />
            <label htmlFor="taskPrice">Price</label>
            <input type="number" name="taskPrice" id="taskPrice" onChange={handleChange} value={taskData.taskPrice} required  />
            <div className='task-buttons'>
              <button type='submit' className='btn btn-primary'>Add</button>
              <button type='button' className='btn btn-secondary' onClick={handleClose}>Close</button>
            </div>
          </form>        
    </div>  
  );
}

export default Modal;