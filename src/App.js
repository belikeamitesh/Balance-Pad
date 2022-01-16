import "./App.css";
import Break from "./Pages/Break/Break"
import Todo from "./Pages/Todo/Todo"
import Home from "./Home"
import About from "./Pages/About"
import SMSForm from "./SMSForm"
import Info from "./Pages/Info/Info";
import { BrowserRouter as Router, Route,Switch } from "react-router-dom";
import Quiz from "./Pages/Quiz/Quiz";
// import Classpad from "./Pages/Classpad/Classpad"
function App() {
  return (
  <Router>
    <Switch>
        <Route exact path="/sms">
          <SMSForm />
        </Route>
        <Route exact path="/">
          <Home />
        </Route>
        {/* <Route exact path="/classpad">
          <Classpad />
        </Route> */}
        <Route exact path="/about">
          <About />
        </Route>
        <Route path="/todo">
          <Todo />
        </Route>
        <Route path="/break">
          <Break />
        </Route>
        <Route path="/info">
          <Info />
        </Route>
        <Route path="/quiz">
          <Quiz />
        </Route>
    </Switch>
  </Router>
  );
}

export default App;
