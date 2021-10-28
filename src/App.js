import "./utils/api";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

//Component
import Header from "./Components/Header";
import Footer from "./Components/Footer";
//Pages
import Home from "./pages/Home";
import SelectPokemon from "./pages/SelectPokemon";
import ListAllPokemon from "./pages/ListAllPokemon";

function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route exact path={["/", "/pokedex"]} component={Home} />
        <Route exact path="/pokemon/:id" component={SelectPokemon} />
        <Route exact path="/listPokemon/" component={ListAllPokemon} />
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
