import { Route, Switch } from 'react-router-dom';
import LandingPage from '../pages/LandingPage.js';
import CodingPage from '../pages/CodingPage.js';
import MediaPage from '../pages/MediaPage.js';
import AboutPage from '../pages/AboutPage.js';

function App() {
  return (
    <div class="application">
      <Switch>
        <Route path='/' exact={true}>
          <LandingPage />
        </Route>
        <Route path='/code'>
          <CodingPage />
        </Route>
        <Route path='/media'>
          <MediaPage />
        </Route>
        <Route path='/about'>
          <AboutPage />
        </Route>
      </Switch>
    </div>
  );
}

export default App; 