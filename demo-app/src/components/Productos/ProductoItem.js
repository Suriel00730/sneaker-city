import React, { useContext } from 'react';
import { DataContext } from '../../context/Dataprovider';

const ProductoItem = ({ id, brand, model, price, image, date, sizesAmount }) => {

    const value = useContext(DataContext);
    const addCarrito = value.addCarrito;
    const [menuDetalle, setMenuDetalle] = value.menuDetalle;
    const detalle = value.detalle;

    const toogleDetalle = id => {
        setMenuDetalle(!menuDetalle);
        detalle(id);
    }


    return (
        <div className='producto'>
            <a href='#'>
                <div className='producto_img' onClick={() => toogleDetalle(id)}>
                    <img src={image} alt={model} />
                </div>
            </a>
            <div className='producto_footer'>
                <h1> {brand} </h1>
                <p>{model}</p>
                <p>Fecha de lanzamiento: {date.toLocaleDateString()}</p>
                {/* <p>{sizesAmount}</p> */}

                <p className='price'>${price}</p>
            </div>
            <div className='buttom'>
                <button className='btn' onClick={() => addCarrito(id)}>
                    Añadir al carrito
                </button>
                <div>
                    <a href='#' className='btn'>Vista</a>
                </div>
            </div>
        </div>
    )
}

export default ProductoItem