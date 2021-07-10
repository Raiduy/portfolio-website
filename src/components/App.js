import './App.scss';
import Navbar from './Navbar.js'
import Cards from './Cards.js';

function App() {
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

export default App; 