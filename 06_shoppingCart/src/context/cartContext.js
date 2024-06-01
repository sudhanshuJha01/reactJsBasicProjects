import { createContext , useContext } from "react";

export const cartContext = createContext();

export const CartContextProvider = cartContext.Provider;

export default useCart = ()=>{
    return useContext(cartContext)

}