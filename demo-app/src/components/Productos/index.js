import React, { useContext } from 'react';
import { DataContext } from '../../context/Dataprovider';
import ProductoItem from './ProductoItem';

const ProductosLista = () => {

    const value = useContext(DataContext)
    const [productos] = value.productos;

    const orderedData = productos.slice().sort((a, b) => b.date - a.date).splice(0, 10);

    return (
        <>
            <h1 className='title'>PRODUCTOS</h1>
            <div className='productos'>
                {
                    orderedData.map(producto => (
                        <ProductoItem
                            key={producto.id}
                            id={producto.id}
                            brand={producto.brand}
                            model={producto.model}
                            price={producto.price}
                            image={producto.image}
                            date={producto.date}
                            sizesAmount={producto.sizesAmount}
                        />
                    ))
                }
            </div>
        </>
    )
}

export default ProductosLista