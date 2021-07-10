import './Cards.css'
import code from '../images/coding.svg'
import camera from '../images/camera.svg'
import me from '../images/me.svg'

function Cards() {
  return(
    <div class="cards-container">
      <div class="card coding">
        <img src={code} alt="Code image from" />
        <h2>Coding</h2>
        <p>Have a look into my programming skills.</p>
      </div>

      <div class="card media">
        <img src={camera} alt="Camera image from" />
        <h2>Media</h2>
        <p>Enjoy a trip though my art journey with photos, videos and more.</p>
      </div>

      <div class="card about">
        <img src={me} alt="Person image from" />
        <h2>About Me</h2>
        <p>Get to know me and what I do.</p>
      </div>
    </div>
  );
}

export default Cards;