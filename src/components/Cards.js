import history from '../history.js';
import './Cards.css'
import code from '../images/coding.svg'
import camera from '../images/camera.svg'
import me from '../images/me.svg'

function Cards() {
  return(
      <div class="cards-container">

          <div class="card coding" onClick={() => history.push('/code')}>
            <img src={code} alt="Code"/>
            <h2>Coding</h2>
            <p>Have a look into my programming skills.</p>
          </div>

          <div class="card media" onClick={() => history.push('/media')}>
            <img src={camera} alt="Media"/>
            <h2>Media</h2>
            <p>Enjoy a trip though my art journey with photos, videos and more.</p>
          </div>

          <div class="card about" onClick={() => history.push('/about')}>
            <img src={me} alt="About"/>
            <h2>About Me</h2>
            <p>Get to know me and what I do.</p>
          </div>
      </div>
  );
}

export default Cards;