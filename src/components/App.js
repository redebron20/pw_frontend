import React from "react";
import Router from "./Router";
import NavBar from './navbar/navbar';
import Footer from './footer/footer';
import './App.css';

const App = () => {
    return (
        <div>
            <NavBar />
            <Router />
            <Footer />
        </div>
    )
}

export default App;