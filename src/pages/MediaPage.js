import './MediaPage.css';
import ContactMe from "../components/ContactMe.js";
import Navbar from "../components/Navbar.js";

function MediaPage() {
  return(
    <div class="media-wrapper">
      <Navbar />
      <p>Haha, media pagee</p>
      <hr/>
      <ContactMe />
      <hr/>
    </div>
  );
}

export default MediaPage;