import "./Navbar.css"
import history from '../history.js';

function Navbar() {
  return (
    <div class="topnav">
      <a id="home" onClick={() => history.push('/')}>Radu Apsan</a>
      <a id="about" onClick={() => history.push('/about')}>.about</a>
      {/* <a id="blend" href="#blender">.blend</a>
      <a id="mp4" href="#video">.mp4</a> */}
      <a id="jpg" onClick={() => history.push('/media')}>.media</a>
      <a id="code" onClick={() => history.push('/code')}>.code()</a>
    </div>
  );
}

export default Navbar; 