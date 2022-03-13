import React, { useContext } from 'react';
import { DataContext } from '../../context/Dataprovider';

const Detalles = () => {

    const value = useContext(DataContext);
    const [menuDetalle, setMenuDetalle] = value.menuDetalle;
    const [productoDetalle] = value.productoDetalle;
    const [productos] = value.productos;

    const { brand, model, price, date, image, sizesAmount } = productoDetalle;
    // const { brand, model, price, date, image, sizesAmount } = productos[1];

    const show1 = menuDetalle ? "carritos show" : "carritos";
    const show2 = menuDetalle ? "carrito show" : "carrito";

    const tooglefalse = () => {
        setMenuDetalle(false);
    }

    // sizesAmount.map(s => {
    //     console.log(s.sizes);
    // })
    // console.log(productos[0].brand);


    return (
        <div className={show1}>
            <div className={show2}>
                <div className='carrito_close' onClick={tooglefalse}>
                    <box-icon name='x'></box-icon>
                </div>
                <h2>Detalles</h2>
                <div className='producto_img'>
                    {/* <img src={image} alt={model} /> */}
                </div>
                <div className=''>
                    {/* <h2>{productos[0].brand}</h2> */}
                    {/* <p>{model}</p> */}
                    {/* <p>{price}</p>  */}
                    {/* <p>Fecha de lanzamiento: {date.toLocalDateString()}</p> */}
                    {/* <p>{sizesAmount.name}</p> */}
                    {/* <p>{sizesAmount[1].sizes}</p> */}
                    {
                        // sizesAmount.map(s => {
                        //     <p>{s.sizes}</p>
                        // })
                    }
                </div>
            </div>
        </div>
    )
}

export default Detalles