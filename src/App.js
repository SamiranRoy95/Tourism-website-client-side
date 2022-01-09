import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,

} from "react-router-dom";
import './App.css';

import Contact from "./Components/Contact/Contact";
import Details from "./Components/Details/Details";
import Footer from "./Components/Footer/Footer";
import Header from "./Components/Header/Header";
import Home from "./Components/Home/Home";
import Login from "./Components/Login/Login";
import MyBooking from "./Components/MyBooking/MyBookin";
import NewServiceAdd from "./Components/NewServiceAdd/NewServiceAdd";

import Services from "./Components/Services/Services";
import SinglePost from "./Components/SinglePost/SinglePost";
import PrivateRoute from "./Components/PrivateRoute/PrivateRoute"
import NotFound from "./Components/NotFound/NotFound";
import Booking from "./Components/Booking/Booking";

function App() {
  return (
    <div className="App">

      <Router>
        <Header />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/home">
            <Home />
          </Route>
          <PrivateRoute path="/singlepost/:singlepostid">
            <SinglePost />
          </PrivateRoute>
          <Route path="/singlepost/:singlepostid">
            <SinglePost />
          </Route>
          <Route path="/services">
            <Services />
          </Route>

          <Route path="/contact">
            <Contact />
          </Route>
          <Route path="/booking">
            <Booking />
          </Route>

          <Route path="/allbooking">
            <MyBooking />
          </Route>
          <Route path="/addservice">
            <NewServiceAdd />
          </Route>
          {/* <PrivateRoute>

          </PrivateRoute> */}

          <Route path="/post/:id">
            <Details />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="*" >
            <NotFound />

          </Route>
        </Switch>
        <Footer />
      </Router>


    </div>
  );
}

export default App;
