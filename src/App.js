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
import { useStateValue } from "./Context/StateProvider";
import { useEffect } from "react";
import { auth } from "./firebase";
import HeaderAdmin from "./Admin/HeaderAdmin";
import Admin from "./Admin/Admin";



function App() {
  const [{user}, dispatch] = useStateValue();
  //piece of code which runs based on a given condition
  //useEfect hook
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((authUser) => {
      if(authUser) {
        //user is logged in
        dispatch({
          type: 'SET_USER',
          user: authUser
        })
      } else {
        //user is logged out
        dispatch({
          type: 'SET_USER',
          user: null
        })
      }
    })

    return () => {
      unsubscribe();
    };

  }, [])

  console.log(`user is: ${user}`)

  return (
    <div className="App">
        <Router>
          <Switch>
            <Route exact path="/product/:id">
              <Header />
              <Product />
              <Footer />
            </Route>
            <Route exact path="/login">
              <Header/>
              <Login />
              <Footer />
            </Route>
            <Route exact path="/register">
              <Header />
              <Register />
              <Footer />
            </Route>
            <Route exact path="/cart">
              <Header />
              <Cart />
              <Footer />
            </Route>
            <Route exact path="/checkout">
              <Header />
              <Checkout />
              <Footer />
            </Route>
            <Route exact path="/products">
              <Header/>
              <Products />
              <Footer />
            </Route>
            <Route exact path="/admin">
                <HeaderAdmin />
                <Admin />
                <Footer />
            </Route>
            <Route exact path="/">
              <Header/>
              <Home />
              <Footer />
            </Route>
          </Switch>
        </Router>
    </div>
  );
}

export default App;
