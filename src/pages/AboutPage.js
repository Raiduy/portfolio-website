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
              I first started programming in 2015 with C++. Turns out I 
              liked it more than expected since I am now pursuing a career 
              in this field. 
              <br/>
              I had the privilege of doing 2 programming internships with
              Rhode & Schwarz Topex during my highschool years which only
              made me want to go deeper into the field.
              <br/>
              As a result of this, I set out to study for this career abroad.
              Little did I know this would come with so many challenges.
              After getting accepted at all the universities I applied to,
              I chose TU Delft. Unfortunately, my relationship with their
              study got pretty shaky. I switched to Vrije Universiteit 
              Amsterdam after one year of studying at TU Delft. This was 
              one of the best decisions I made up until now. I found myself 
              much more motivated at the VU, and this shows in my grades,
              and especially in the fact that I am an honours student now.
            </p>
          </section>

          <section class="about-photo">
            <h2>
              Photography
            </h2>
            <p>
              Photography came as an hobby, or maybe more of an escape, if 
              you will. During my year in TU Delft I took it up as a way to
              relax and unwind. Soon after I realised that hey...my pictures
              aren't that bad actually. So I started taking more and more.
              Right now I'm still trying to decide which part I like more: taking the
              pictures, or editing them.
            </p>
          </section>

          <section class="about-video">
            <h2>
              Videography
            </h2>
            <p>
              In 9th grade I took a course on producing documentaries.
              That's when my passion for filmmaking, and especially video 
              editing started. I got really comfortable with all types of 
              cameras and editing tools. In my spare time, I study filmmaking
              techniques, even though, these days, I rarely manage to shoot 
              any videos. Over the years I filmed and edited many videos for 
              friends and family, and I can say that I put my heart and soul
              into each and every one of them.
            </p>
          </section>

          <section class="about-blender">
            <h2>
              Blender
            </h2>
            <p>
              Blender came as an unexpected guest that ended up living with 
              me after we got to know eachother. From modelling to motion
              tracking, I got to experiment and fuel my creativity using this
              absolutely amazing application. One of the things I am most 
              proud of regarding this is writing an addon (or plugin) for 
              blender because it did not have that specific functionality.
              This perfectly merged my love for creation with my passion 
              for programming.
            </p>
          </section>

          <section class="about-music">
            <h2>
              Music
            </h2>
            <p>
              Music has been in my life ever since I can hear. With a father
              who loves "old" rock and a mother who sings, it was pretty 
              hard to stay away from it (not that I would have ever wanted to).
              This resulted in me joining a band in 9th grade as the drummer.
              During the 4 years that we played, I got plenty of concerts and
              amazing memories under my belt. Not to mention teamwork skills.
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