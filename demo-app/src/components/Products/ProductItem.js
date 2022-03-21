import React, { useContext } from 'react';
import { DataContext } from '../../context/Dataprovider';

const ProductItem = ({ id, brand, model, price, image, date }) => {

    const value = useContext(DataContext);
    const [menuDetail, setMenuDetail] = value.menuDetail;
    const detail = value.detail;

    const toogleDetail = id => {
        setMenuDetail(!menuDetail);
        detail(id);
    }



    return (
        <div className='product'>
            <a href='#'>
                <div className='product_img'>
                    <img src={image} alt={model} />
                </div>
            </a>
            <div className='product_footer'>
                <h1> {brand} </h1>
                <p>{model}</p>
                <p>Fecha de lanzamiento: {date.toLocaleString()}</p>

                <p className='price'>Precio: ${price}</p>
            </div>
            <div className='buttom'>
                <div className='btn-view' onClick={() => toogleDetail(id)}>
                    <a href='#' className='btn'>Vista</a>
                </div>
            </div>
        </div>
    )
}

export default ProductItem