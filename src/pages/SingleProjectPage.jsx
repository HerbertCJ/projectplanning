import { useEffect, useState } from "react"
import { useSelector } from "react-redux"
import { useParams } from "react-router-dom"
import Modal from '../components/Modal'
import SingleTask from '../components/SingleTask'

function SingleProjectPage() {
  const {projectsData} = useSelector((store) => store.project)  
  const {id} = useParams() 
  const [loadProject, setLoadProject] = useState({})
  const [loading, setLoading] = useState(true)
  const [showModal, setShowModal] = useState(false)
 
  useEffect(() => {
    setLoading(true)
    const findProject = projectsData.filter((project) => project.id === id)    
    if(findProject === undefined) return;
    setLoadProject(findProject[0])
    setLoading(false)
  }, [id, projectsData])

  
  if(loading) {
    return <section className="section-center middle">
      <h2>Loading...</h2>
    </section>
  }
  const {title, description, budget, tasks} = loadProject
  return (
    <section className={showModal ? 'section-center active-bg' : 'section-center'}>
      <div className="project-info">
        <h2>{title}</h2>
        <p><span>Description:</span> {description}</p>        
        <p><span>Budget:</span> $ {budget}</p>
      </div>
      <hr />
      <div className="project-configure">
        <div>
          <h4>Tasks</h4>          
        </div>
        <button type="button" className="btn btn-dark" onClick={() => setShowModal(!showModal)}>
          Configure
        </button>
      </div>
      <div>
        {tasks.map((task, index) => {          
          return <SingleTask key={index} {...task}/>
        })}
      </div>
      {showModal && <Modal data={loadProject} setShowModal={setShowModal} />}      
    </section>
  )
}
export default SingleProjectPage