import React from 'react';
import Inicio from './Inicio';
import ProductosLista from './Productos/index';
import { Switch, Route } from 'react-router-dom';


const Pages = () => {
    return (
        <section>
            <Switch>
                <Route path='/' exact component={Inicio} />
                <Route path='/productos' exact component={ProductosLista} />
            </Switch>
        </section>
    )
}

export default Pages
