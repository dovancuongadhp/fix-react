import { Switch } from "react-router";
import { BrowserRouter as Router,Route } from 'react-router-dom'

import AddProduct from "./components/AddProduct";
import Detail from "./components/Detail";
import Edit from "./components/Edit";
import ListProduct from "./components/ListProduct";
import Navbar from "./components/Navbar";

function Routes(props) {
    return ( 
        <Router>
            <Navbar />
            <Switch>
                <Route exact path ="/products"><ListProduct {...props}/></Route>
                <Route exact path ="/product/add"><AddProduct {...props} /></Route>
                <Route exact path ="/product/:id"><Detail {...props} /></Route>
                <Route exact path ="/product/edit/:id"><Edit /></Route>
            </Switch>
        </Router>
     );
}

export default Routes;