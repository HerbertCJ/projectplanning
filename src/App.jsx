import NavbarBt from './components/Navbar'
import Footer from './components/Footer'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Projects from './pages/Projects'
import NewProject from './pages/NewProject'
import ErrorPage from './pages/ErrorPage'
import SingleProjectPage from './pages/SingleProjectPage'
import { Container } from 'react-bootstrap'
import { ToastContainer } from 'react-toastify'

function App() {
  return (
    <BrowserRouter>
      <NavbarBt />
        <Container fluid>
          <Routes>
              <Route path='/' element={<Home />} />
              <Route path='projects' element={<Projects />} />      
              <Route path='projects/:id' element={<SingleProjectPage />} />      
              <Route path='newproject' element={<NewProject />} />      
              <Route path='*' element={<ErrorPage />} />      
          </Routes>
        </Container>
      <Footer />
      <ToastContainer position="top-center" />
    </BrowserRouter>
  )
}

export default App
