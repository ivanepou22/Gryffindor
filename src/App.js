import Header from "./Components/Header";
import './assets/css/bootstrap.min.css'
import './assets/css/tiny-slider.css';
import {BrowserRouter as Router , Route, Switch} from 'react-router-dom';
import Home from "./Pages/Home";
import Product from "./Pages/Product";
import Footer from "./Components/Footer";
import Login from "./Pages/Login";
import Register from "./Pages/Register";
import Cart from "./Pages/Cart";
import Checkout from "./Pages/Checkout";
import Products from "./Pages/Products";


function App() {
  return (
    <div className="App">
        <Header/>
        <Router>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/product" component={Product} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/register" component={Register} />
            <Route exact path="/cart" component={Cart} />
            <Route exact path="/checkout" component={Checkout} />
            <Route exact path="/products" component={Products} />
          </Switch>
        </Router>
        <Footer />
    </div>
  );
}

export default App;
