import React, { useContext } from 'react';
import Home from './Home';
import ProductsList from './Products/index';
import { Switch, Route } from 'react-router-dom';
import { DataContext } from '../context/Dataprovider';


const Pages = () => {
    const value = useContext(DataContext)
    const [products] = value.products;
    console.log(products);
    return (
        <section>
            <Switch>
                <Route path='/' exact component={Home} />
                <Route path='/products' exact component={ProductsList} />
            </Switch>
        </section>
    )
}

export default Pages
