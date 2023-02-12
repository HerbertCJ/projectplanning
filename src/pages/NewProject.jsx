import { useState } from "react"
import { useDispatch } from "react-redux"
import { toast } from 'react-toastify'
import { addProject } from "../features/projectsSlice/projectSlice"
import { useNavigate } from "react-router-dom"


function NewProject() {
  const navigate = useNavigate()
  const initialData = {
    id: new Date().getMilliseconds().toString(),
    title: '', 
    budget: 0,
    description: '',
    total: 0,
    tasks: [],
  }
 
  const dispatch = useDispatch()
  const [data, setData] = useState(initialData)

  

  const handleSubmit = (e) => {
    e.preventDefault()
    if(!data.title || !data.description || !data.budget < 0) {
      toast.error('Missing information or Bugdet is low then 0.')
      return;
    }    
    dispatch(addProject(data))
    toast.success('Project Created.')
    navigate('/projects')
  }

  const handleChange = (e) =>{
    const name = e.target.name
    const value = e.target.value
    setData({...data, [name]: value})
       
  }

  const clearData = () => {
    setData(initialData)
  }

  return (
    <section className="section-center">
        <div className="form-div">
          <form className="form">            
           <h2>Create new project</h2>      
            <label htmlFor="title">Title</label>
            <input type="text" name="title" id="title" onChange={handleChange} value={data.title} required />
            <label htmlFor="budget">Budget</label>
            <input type="number" name="budget" id="budget" onChange={handleChange} value={data.budget} step='0.5' required />
            <label htmlFor="description">Description</label>
            <textarea name="description" id="description" onChange={handleChange} value={data.description} required maxLength='300'/>
            <div className="btns-form">
              <button type="submit" className="btn btn-dark" onClick={handleSubmit}>Create</button>
              <button type="button" className="btn btn-warning" onClick={clearData}>Clear</button>
            </div>
          </form>
        </div>  
    </section>
  )
}
export default NewProject