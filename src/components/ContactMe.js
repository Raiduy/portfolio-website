import './ContactMe.css'
import { SocialIcon } from 'react-social-icons';

function copyToClipboard(e) {
  navigator.clipboard.writeText("radu.apsan@gmail.com")
  document.getElementById("copy-me").innerHTML="Email copied";
}

function ContactMe() {
  return(
    <div class="contact-container">
      <div class="contact-title">
        <h1>Let's talk</h1>
      </div>
      <div class="contact-row">
        <div class="contact-hello col">
          <p>
            Hi there, I hope you liked the website, it was pretty fun to make it.
            <br/>
            <br/>
            Considering the fact that I'm not quite into web design, and even 
            less so into front end development, I think I did a pretty good job.
          </p>
        </div>
        <div class="contact-email col">
          <p>
            You can email me if you're feeling professional :)
          </p>
          <div class="email" onClick={copyToClipboard}>
            <SocialIcon network="email" bgColor="white"/>
            <p id="my-email">radu.apsan@gmail.com</p>
            <p id="copy-me">Click me</p>
          </div>
        </div>
        <div class="contact-social-media col">
          <p>
            Or you can reach out on social media for a chat
          </p>
          <div class="social-container">
            <SocialIcon className="social" url="https://github.com/Raiduy" target="_blank" bgColor="white"/>
            <SocialIcon className="social" url="https://www.linkedin.com/in/radu-apsan-a78296213/" target="_blank" bgColor="white"/>
            <SocialIcon className="social" url="https://www.instagram.com/ridu_99/" target="_blank" bgColor="white"/>
            <SocialIcon className="social" url="https://twitter.com/RaduApsan" target="_blank" bgColor="white"/>
          </div>
        </div>
      </div>
      <div class="contact-end">
        <h1>Cheers, take care</h1>
      </div>
    </div>
  );
}

export default ContactMe;