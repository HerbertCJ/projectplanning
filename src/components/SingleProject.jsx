import { useDispatch } from "react-redux"
import { Link } from "react-router-dom"
import { deleteProject } from "../features/projectsSlice/projectSlice"

function SingleProject({id, title, description, budget}) {
  const dispatch = useDispatch()
  return (
    <section className="single-project">
        <h4>{title}</h4>
        <hr />
        <p>{description}</p>
        <p>Budget: $ {budget}</p>
        <div className="btn-config">            
            <Link to={`/projects/${id}`} className='btn btn-dark'>View</Link>            
            <button type="button" className="btn btn-danger" onClick={() => dispatch(deleteProject(id))}>Delete</button>
        </div>
    </section>
  )
}
export default SingleProject