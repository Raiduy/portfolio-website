import './Cards.css';
import { Link } from 'react-router-dom';
import code from '../images/coding.svg';
import camera from '../images/camera.svg';
import me from '../images/me.svg';

function Cards() {
  return(
      <div class="cards-container">
        <Link to='/code' className="card coding">
          <img src={code} alt="Code"/>
          <h2>Coding</h2>
          <p>Have a look into my programming skills.</p>
        </Link>

        <Link to='/media' className="card media">
          <img src={camera} alt="Media"/>
          <h2>Media</h2>
          <p>Enjoy a trip though my art journey with photos, videos and more.</p>
        </Link>

        <Link to='/about' className="card about">
          <img src={me} alt="About"/>
          <h2>About Me</h2>
          <p>Get to know me and what I do.</p>
        </Link>
      </div>
  );
}

export default Cards;