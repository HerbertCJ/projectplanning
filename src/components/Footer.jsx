import logo from '../imgs/logo_transparent.png'

function Footer() {
  return (
    <footer>
      <p>
        <img src={logo} alt="logo" />
      </p>
      <p>
        &copy; {new Date().getFullYear()} All Rights Reserved
      </p>      
    </footer>
  )
}
export default Footer