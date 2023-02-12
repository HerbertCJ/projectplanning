import { useEffect, useState } from "react"
import { useSelector } from "react-redux"
import { useParams } from "react-router-dom"
import Modal from '../components/Modal'

function SingleProjectPage() {
  const {projectsData} = useSelector((store) => store.project)
  const {id} = useParams()
  const [loadProject, setLoadProject] = useState()
  const [loading, setLoading] = useState(true)
  const [showModal, setShowModal] = useState(false)
 
  useEffect(() => {
    setLoading(true)
    let findProject = projectsData.find((project) => project.id === id)    
    setLoadProject(findProject)
    setLoading(false)
  }, [id])

  if(loading) {
    return <section className="section-center middle">
      <h2>Loading...</h2>
    </section>
  }
  
  const {title, description, budget} = loadProject
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
      {showModal && <Modal data={loadProject} setShowModal={setShowModal} />}      
    </section>
  )
}
export default SingleProjectPage