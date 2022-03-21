import React, { useState, useEffect, createContext } from "react";
import axios from 'axios';

export const DataContext = createContext();

const baseUrl = 'https://localhost:44313/api/PerfilPersonal';

const getProducts = async () => {
    try {
        const response = await axios({
            url: `${baseUrl}`,
            method: 'GET'
        })

        return response.data
    } catch (e) {
        console.log(e);
    }
}

export const DataProvider = (props) => {
    const [products, setProducts] = useState([]);
    const [menu, setMenu] = useState(false);
    const [carrito, setCarrito] = useState([]);
    const [total, setTotal] = useState(0);
    const [menuDetail, setMenuDetail] = useState(false);
    const [productDetail, setProductDetail] = useState({});

    useEffect(async () => {
        const loadProducts = async () => {
            const response = await getProducts();
            return response;
        }

        const checkProducts = await loadProducts();
        if (checkProducts) {
            setProducts(checkProducts);
        } else {
            setProducts([]);
        }
    }, []);

    const detail = id => {
        const product = products.filter(p => p.id === id)[0];
        setProductDetail(product);
    }

    useEffect(() => {
        const dataCarrito = JSON.parse(localStorage.getItem('dataCarrito'));
        if (dataCarrito) {
            setCarrito(dataCarrito);
        }
    }, [])
    useEffect(() => {
        localStorage.setItem('dataCarrito', JSON.stringify(carrito));
    }, [carrito])

    useEffect(() => {
        const getTotal = () => {
            const res = carrito.reduce((prev, item) => {
                return prev + (item.price * item.labelAmount);
            }, 0)
            setTotal(res);
        }
        getTotal();
    }, [carrito])

    const value = {
        products: [products],
        menu: [menu, setMenu],
        carrito: [carrito, setCarrito],
        total: [total, setTotal],
        menuDetail: [menuDetail, setMenuDetail],
        detail: detail,
        productDetail: [productDetail, setProductDetail]
    }

    return (
        <DataContext.Provider value={value}>
            {props.children}
        </DataContext.Provider>
    )
}