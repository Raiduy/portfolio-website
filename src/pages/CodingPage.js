import './CodingPage.css';
import Navbar from "../components/Navbar.js";
import ContactMe from '../components/ContactMe.js'

function Coding() {
  return(
    <div class="coding-wrapper">
      <Navbar />
      <p>Haha, coding pagee</p>
      <hr/>
      <ContactMe />
      <hr/>
    </div>
  );
}

export default Coding;