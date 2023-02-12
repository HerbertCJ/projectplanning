import { Link } from "react-router-dom"

function ErrorPage() {
  return (
    <section className="section-center">
      <section className="error-page">  
            <h2>Page not Found</h2>
            <p>Sorry, the current page cannot be found or the page has been deleted.</p>
            <Link to='/' className='btn btn-danger'>Back to Home</Link>              
      </section>
    </section>
  )
}
export default ErrorPage