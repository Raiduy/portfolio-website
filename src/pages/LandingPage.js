import Cards from "../components/Cards";
import './LandingPage.css'

function LandingPage() {
  return (
    <div class="application">
      <div class="application-content">
        <h1>
          Hi there, Radu here
        </h1>
        <h2>
          Pick your poison
        </h2>
        <Cards />
      </div>
    </div>
  );
}

export default LandingPage; 