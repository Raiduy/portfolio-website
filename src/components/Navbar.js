import "./Navbar.css"
import history from '../history.js';

function Navbar() {
  return (
    <div class="topnav">
      <p id="home" onClick={() => history.push('/')}>Radu Apsan</p>
      <p id="about" onClick={() => history.push('/about')}>.about</p>
      {/* <p id="blend" href="#blender">.blend</p>
      <p id="mp4" href="#video">.mp4</p> */}
      <p id="jpg" onClick={() => history.push('/media')}>.media</p>
      <p id="code" onClick={() => history.push('/code')}>.code()</p>
    </div>
  );
}

export default Navbar; 