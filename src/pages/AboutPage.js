import './AboutPage.css';
import Navbar from "../components/Navbar.js";
import ContactMe from '../components/ContactMe.js';

function AboutPage() {
  return(
    <div class="about-wrapper">
      <Navbar />
      <div class="about-container">
        <div class="about-intro">
          <h1>About Me</h1>
          <p>
            Hi there, Radu here, glad to...sort of meet you.
          </p>
          <p>
            I'm a happy dude from Romania who chose to follow his passion 
            in programming overseas, more specifically, the Netherlands.
          </p>
          <p>
            Aside from programming, I am super passionate about art. 
            Photography, filmmaking, 3D modelling, music are all things 
            that I call hobbies. 
          </p>
          <p>
            I think I actually have a secret love for learning things. I 
            love the idea of being a jack of all trades.
          </p>
          <p id="jack">
            &lt;&#47; “A jack of all trades is a master of none, 
            but oftentimes better than a master of one.” &gt;
          </p>
        </div>

        <div class="about-contents">
          <section class="about-programming">
            <h2>
              Programming
            </h2>
            <p>
              Programming stuff things
            </p>
          </section>

          <section class="about-photo">
            <h2>
              Photo
            </h2>
            <p>
              Photo stuff things
            </p>
          </section>

          <section class="about-video">
            <h2>
              Video
            </h2>
            <p>
              Video stuff things
            </p>
          </section>

          <section class="about-blender">
            <h2>
              Blender
            </h2>
            <p>
              Blender stuff things
            </p>
          </section>

          <section class="about-music">
            <h2>
              Music
            </h2>
            <p>
              Music stuff things
            </p>
          </section>
        </div>
      </div>
      <hr/>
      <ContactMe />
      <hr/>
    </div>
  );
}

export default AboutPage;