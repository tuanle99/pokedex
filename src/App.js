import "./utils/api";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import SelectPokemon from "./pages/SelectPokemon";
import Header from "./pages/Header";

function App() {
  return (
    <Router>
      {/* <Header /> */}
      <Switch>
        <Route exact path="/:id" component={SelectPokemon} />
      </Switch>
    </Router>
  );
}

export default App;
