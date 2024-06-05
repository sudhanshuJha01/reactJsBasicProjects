import { createContext, useContext } from "react";

export const shopContext = createContext({
    products:{},
    items:{},
    handleAddInCart:()=>{},
    setProducts:()=>{},
    setItems:()=>{}
});

export const ShopContextProvider = shopContext.Provider;


export default function useShop(){
    return useContext(shopContext);
}