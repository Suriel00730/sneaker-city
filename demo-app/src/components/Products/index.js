import React, { useContext } from 'react';
import { DataContext } from '../../context/Dataprovider';
import ProductItem from './ProductItem';

const ProductsList = () => {

    const value = useContext(DataContext)
    const [products] = value.products;

    const orderedData = products.slice().sort((a, b) => Date.parse(b.date) - Date.parse(a.date)).splice(0, 10);


    return (
        <>
            <h1 className='title'>PRODUCTOS</h1>
            <div className='products'>
                {
                    orderedData.map(product => (
                        <ProductItem
                            key={product.id}
                            id={product.id}
                            brand={product.brand}
                            model={product.model}
                            price={product.price}
                            image={product.image}
                            date={product.date}
                            sizesAmount={product.sizesAmount}
                        />
                    ))
                }
            </div>
        </>
    )
}

export default ProductsList