import { Link } from 'react-router-dom'

function Home() {
  return (
    <section className="section-center img-home">
      <h2>Welcome to ProjeTec</h2>
      <p>Start managing your projects right now</p>
      <Link to='/newproject' className='btn btn-dark'>New Project</Link>     
    </section>
  )
}
export default Home