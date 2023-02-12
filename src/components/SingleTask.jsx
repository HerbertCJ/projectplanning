import { useDispatch } from "react-redux"
import { deleteTask } from "../features/projectsSlice/projectSlice"

function SingleTask({taskTitle, taskPrice, projectId, index}) {
  const dispatch = useDispatch()
  return (
    <div className="single-task">  
      <p>{taskTitle}</p>
      <p>$ {taskPrice}</p>
      <div>
        <button type="button" className="btn btn-danger" onClick={() => dispatch(deleteTask({projectId, index, taskPrice}))}>Delete</button>
      </div>
    
    </div>
  )
}
export default SingleTask