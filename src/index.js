import React from "react"
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"


import Home from "./components/pages/Home"
import Header from "./components/parts/Header"
import Footer from "./components/parts/Footer"
import About from "./components/pages/About"
import Login from "./components/auth/Login"
import Register from "./components/auth/Register"
import Dashboard from "./components/auth/Dashboard"

import PublicRoute from "./components/auth/PublicRoute"
import PrivateRoute from "./components/auth/PrivateRoute"



function Index() {
  return (
    
      <Router>
        <Header/>
          <Switch>
            <Route exact path='/' component={Home}/>
            <Route exact path='/about' component={About}/>
            <PublicRoute exact path='/login' component={Login}/>
            <Route exact path='/register' component={Register}/>
            <PrivateRoute exact path='/dashboard' component={Dashboard}/>
          </Switch>
          <Footer/>
      </Router>
   
  );
}

export default Index;
if (document.getElementById('root')) { ReactDOM.render(<Index />, document.getElementById('root')) }
