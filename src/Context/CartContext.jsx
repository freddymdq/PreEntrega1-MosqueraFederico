import React, { useState, useContext} from "react";

export const useCartContext = ()=> useContext(CartContext);

const CartContext = React.createContext([])



const CartProvider = ({children}) =>{

    const [cart, setCart] = useState([]);

    const addProduct = (item, quantity) => {
        if (isInCart(item.id)) {
            setCart(cart.map(product => {
                return product.id === item.id ? { ...product, quantity: product.quantity + quantity } : product
            }));
        } else {
            setCart([...cart, { ...item, quantity }]);
        }
    }
    console.log("carrito", cart)

    // Recorre los productos del carrito y los suma
    const totalPrice = () => {
        return cart.reduce((prev, act)=> prev + act.quantity * act.price, 0);
    }

    // Recorre la cantidad de productos en el carrito y los suma.
    const totalProduct = () => {
        cart.reduce((acumulador, productoActual) => acumulador + productoActual.quantity,0)};

    const clearCart = () => setCart([]);

    const isInCart = (id) => {
        return cart.find(product => product.id === id)? true: false;
    }

    const removeProduct = (id) => setCart(cart.filter(product => product.id !== id));




    return (
        <CartContext.Provider value= {{
            clearCart,
            isInCart,
            removeProduct,
            addProduct,
            totalPrice,
            totalProduct,
            cart
        }}>
            {children}
        </CartContext.Provider>
    )
}

export  {CartProvider}

