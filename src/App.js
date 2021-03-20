import './App.css';
import React from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";
import ShowProduct from "./ShowProduct";
import Products from "./Products";

function App() {
    return (
        <>
            <Router>
                <Route path="/products" exact component={Products}/>
                <Route path="/products/:id" component={ShowProduct}/>
            </Router>
        </>
    );
}

export default App;
