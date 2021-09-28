import Navbar from "./components/Layouts/Navbar";
import './App.css';
import Footer from "./components/Layouts/Footer";
import {Route, Switch } from "react-router-dom";
import Home from "./components/pages/Home";
import News from "./components/pages/News";
import Contacts from "./components/pages/Contacts";
import Details from "./components/pages/Details";
import Signup from "./components/pages/Signup";
import Login from "./components/pages/Login";


function App() {
  return (
    <>
     <Navbar />
     <Switch>
       <Route exact path="/" component={Home} />
       <Route exact path="/tolu" component={News} />
       <Route exact path="/cards" component={Details} />
       <Route exact path="/josiah" component={Login} />
       <Route exact path="/contacts" component={Contacts} />
       <Route exact path="/signup" component={Signup} />
       
       </Switch>
     <Footer />
    </>
  );
}

export default App;
