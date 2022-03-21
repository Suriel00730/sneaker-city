import React, { useState, useContext } from 'react';
import Select from 'react-select';
import { DataContext } from '../../context/Dataprovider';

const Details = () => {

    const value = useContext(DataContext);
    const [valueSelect, setValueSelect] = useState({});
    const [menuDetail, setMenuDetail] = value.menuDetail;
    const [productDetail] = value.productDetail;
    const [carrito, setCarrito] = value.carrito

    const { id, brand, model, price, date, image, sizesAmount } = productDetail;

    const show1 = menuDetail ? "carritos show" : "carritos";
    const show2 = menuDetail ? "carrito show" : "carrito";

    const tooglefalse = () => {
        setMenuDetail(false);
    }


    const addCarrito = id => {
        const add = {
            id: id,
            brand: brand,
            model: model,
            price: price,
            date: date,
            image: image,
            sizes: valueSelect.value,
            amount: valueSelect.amount,
            labelAmount: 1
        }
        const check = carrito.every(item => {
            return item.id !== id;
        })
        if (check) {
            setCarrito([...carrito, add]);
        } else {
            alert("El producto se ha añadido al carrito");
        }
    }

    const options = () => {
        const sizes = [];
        if (sizesAmount === undefined) return;
        sizesAmount.map(s => {
            sizes.push({ value: s.sizes, label: s.sizes, amount: s.amount });
        });
        return sizes;
    }
    const onDropdownChange = value => {
        setValueSelect(value);
    }


    return (
        <div className={show1}>
            <div className={show2}>
                <div className='carrito_close' onClick={tooglefalse}>
                    <box-icon name='x'></box-icon>
                </div>
                <h2 className='title_details'>Detalles</h2>
                <div className='container_details'>
                    <div className='details_img'>
                        <img src={image} alt={model} />
                    </div>
                    <div className='details'>
                        <div className='select'>
                            <label>Sizes disponibles: </label>
                            <Select
                                options={options()}
                                onChange={onDropdownChange}
                            />
                        </div>
                        <h3><label>Marca: </label>{brand}</h3>
                        <p><label>Modelo: </label>{model}</p>
                        <p><label>Precio: </label>${price}</p>
                        <p><label>Fecha de lanzamiento: </label>{date}</p>
                    </div>
                </div>
                <div className='buttom_add'>
                    <div className='buttom'>
                        <button className='btn' onClick={() => addCarrito(id)}>
                            Añadir al carrito
                        </button>
                    </div>
                </div>
            </div>
        </div >
    )
}

export default Details