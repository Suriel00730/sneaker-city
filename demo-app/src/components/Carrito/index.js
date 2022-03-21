import React, { useContext } from 'react';
import { DataContext } from '../../context/Dataprovider';

const Carrito = () => {
    const value = useContext(DataContext);
    const [menu, setMenu] = value.menu;
    const [carrito, setCarrito] = value.carrito;
    const [total] = value.total;

    const tooglefalse = () => {
        setMenu(false);
    }

    const show1 = menu ? "carritos show" : "carritos";
    const show2 = menu ? "carrito show" : "carrito";

    const subtraction = id => {
        carrito.forEach(item => {
            if (item.id === id) {
                item.labelAmount === 1 ? item.labelAmount = 1 : item.labelAmount -= 1;
            }
            setCarrito([...carrito]);
        })
    }
    const sum = id => {
        carrito.forEach(item => {
            if (item.id === id) {
                item.labelAmount === item.amount ?
                    item.labelAmount = item.labelAmount : item.labelAmount += 1;
            }
            setCarrito([...carrito]);
        })
    }

    const removeProduct = id => {
        if (window.confirm("Quieres suspender el producto?")) {
            carrito.forEach((item, index) => {
                if (item.id === id) {
                    item.price = 1;
                    carrito.splice(index, 1)
                }
            })
            setCarrito([...carrito]);
        }
    }

    return (
        <div className={show1} >
            <div className={show2} >
                <div className='carrito_close' onClick={tooglefalse}>
                    <box-icon name='x'></box-icon>
                </div>
                <h2>Su carrito</h2>
                <div className='carrito_center'>
                    {
                        carrito.length === 0 ?
                            <p style={{
                                textAlign: 'center',
                                fontSize: '2rem',
                                color: 'red'
                            }}>
                                No hay elementos en el carrito
                            </p> : (
                                carrito.map(product => (
                                    <div className='carrito_item' key={product.id}>
                                        <img src={product.image} alt='' />
                                        <div>
                                            <h3>{product.brand}</h3>
                                            <p>{product.model}</p>
                                            <p>Size: {product.sizes}</p>
                                            <h3>Precio: ${product.price}</h3>
                                        </div>
                                        <div>
                                            <h4>Cantidad</h4>
                                            <box-icon
                                                className='up-arrow'
                                                name='up-arrow'
                                                type='solid'
                                                onClick={() => sum(product.id)}
                                            ></box-icon>
                                            <p className='quantity'>{product.labelAmount}</p>
                                            <box-icon
                                                name='down-arrow'
                                                type='solid'
                                                onClick={() => subtraction(product.id)}
                                            ></box-icon>
                                        </div>
                                        <div
                                            className='remove_item'
                                            onClick={() => removeProduct(product.id)}>
                                            <box-icon name='trash'></box-icon>
                                        </div>
                                    </div>
                                ))
                            )
                    }
                </div>
                <div className='carrito_footer'>
                    <h3>Total: {total}</h3>
                    {/* <button className='btn'>Payment</button> */}
                </div>
            </div>
        </div>
    )
}

export default Carrito