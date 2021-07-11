import "./Navbar.css"
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <div class="topnav">
      <Link to='/'>
        <p id="home">Radu Apsan</p>
      </Link>
      <Link to='/about'>
        <p id="about">.about</p>
      </Link>
      <Link to='/media'>
        <p id="jpg">.media</p>
      </Link>
      <Link to='/code'>
        <p id="code">.code()</p>
      </Link>
    </div>
  );
}

export default Navbar; 