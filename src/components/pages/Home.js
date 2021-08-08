import React from 'react'
import { BrowserRouter as Switch, Route, Link } from "react-router-dom";
import { useState, useEffect } from "react";
import About from './About'
import Login from "../auth/Login"
import Dashboard from "../auth/Dashboard"
import { getToken, removeUserSession, setUserSession } from '../auth/Common';
import axios from 'axios';

function Home() {

    const [authLoading, setAuthLoading] = useState(true);
    

    useEffect(() =>{
        const token = getToken();
        if(!token){
            return;
        }

        axios.get("http://localhost:4000/verifyToken?token={token}")
        .then(response => {
            setUserSession(response.data.token, response.data.user);
            setAuthLoading(false);
        }).catch(error =>{
            removeUserSession();
            setAuthLoading(false);

        })

    }, []);

    if(authLoading && getToken()) {
        return <div className="content">Checking Authentication....</div>
    }


    return (
        <div>
            <section className="home">
                <div className="container">
                    <div className="row">
                        <div className="col-sm-12">
                            <h1><Link to="/">Home</Link></h1>
                            <h1><Link to="/login">Login</Link></h1>
                            <h1><Link to="/dashboard">Dashboard</Link></h1>
                            <Switch>
                                <Route path="/about"><About /></Route>
                                <Route path="/login"><Login /></Route>
                                <Route path="/dashboard"><Dashboard /></Route>
                            </Switch>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}


export default Home

