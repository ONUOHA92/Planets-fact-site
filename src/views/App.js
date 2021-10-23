import './App.styles.js';
import { ThemeProvider } from 'styled-components';
import { theme } from 'assets/styles/theme.js';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import { GlobalStyles } from 'assets/styles/GlobalStyles.js';
import PlanetsBox from 'components/PlanetsBox/PlanetsBox.js';
import { Wrapper } from './App.styles.js';

const App = () => {
  return (
    <Router>
      <ThemeProvider theme={theme}>
        <Wrapper>
          <GlobalStyles />
          <Switch>
            <Route exact path="/">
              <Redirect to="/mercury" />
            </Route>
            <Route path="/mercury">
              <PlanetsBox currentPlanetIndex={0} />
            </Route>
            <Route path="/venus">
              <PlanetsBox currentPlanetIndex={1} />
            </Route>
            <Route path="/earth">
              <PlanetsBox currentPlanetIndex={2} />
            </Route>
            <Route path="/mars">
              <PlanetsBox currentPlanetIndex={3} />
            </Route>
            <Route path="/jupiter">
              <PlanetsBox currentPlanetIndex={4} />
            </Route>
            <Route path="/saturn">
              <PlanetsBox currentPlanetIndex={5} />
            </Route>
            <Route path="/uranus">
              <PlanetsBox currentPlanetIndex={6} />
            </Route>
            <Route path="/neptune">
              <PlanetsBox currentPlanetIndex={7} />
            </Route>
          </Switch>
        </Wrapper>
      </ThemeProvider>
    </Router>
  );
};

export default App;
