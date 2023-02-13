import { useEffect, useState } from "react"
import { useSelector } from "react-redux"
import { Link } from "react-router-dom"
import SingleProject from '../components/SingleProject'


function Projects() {
  const {projectsData, isLoading} = useSelector((store) => store.project)

  useEffect(() => {
    localStorage.setItem('projectsData', JSON.stringify(projectsData))        
  }, [projectsData])

  if(isLoading) {
    return <section className="section-center middle">
      <h2>Loading...</h2>
    </section>
  }

  if(projectsData.length < 1) {
    return <section className="section-center middle">
    <h2>You don't have any projects yet...</h2>
    <h4>Do you want to create one?</h4>
    <Link to='/newproject' className='btn btn-dark'>New Project</Link>
  </section>
  }

  return (
    <section className="section-center">
      <div className="projects">
        <h2>My Projects</h2>
        <Link to='/newproject' className='btn btn-dark'>New Project</Link>        
      </div>
      <div className='display-projects'>
        {projectsData.map((project) => {                
          const { id } = project
          return (
            <SingleProject key={id} {...project} />
          )
        })}
      </div>
    </section>
  )
}
export default Projects