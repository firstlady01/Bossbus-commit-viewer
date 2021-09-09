import { BrowserRouter, Switch, Route } from "react-router-dom";
import './sass/app.scss';
import './sass/button.scss';
import './sass/commit.scss';
import './sass/responsive.scss';
import Home from './pages/Home';
import Commits from './pages/Commits';
import Loader from "./Utils/Loader";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/commit" component={Commits} />
        <Route path="/loader" component={Loader} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
