import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import useShop from '../../context/shopContext';
const url = `https://fakestoreapi.com/products/`;

function Shop() {
    const {products , setProducts , setItems , handleAddInCart} = useShop();
    

    useEffect(() => {
        fetch(url)
            .then((res) => res.json())
            .then((data) => setProducts(data));
    }, []);
    
    return (
        <div>
            {products.length > 0 && (
                <div className=' bg-slate-600 p-1'>
                    
                    <ul className='flex flex-wrap'>
                        {products && products.map((product) => (
                            <li key={product.id} className='card bg-slate-200 hover:shadow-2xl hover:bg-slate-300 shadow-lg border-4 w-[320px] p-12 rounded-xl m-7'>
                                <article>
                                    <h2 className='text-slate-950 text-2xl font-semibold mb-2'>{product.title}</h2>
                                    <p className='font-medium'>{product.category}</p>
                                    <img className='w-36 m-7 rounded-xl font-medium bg-slate-200' src={product.image} alt={product.title} />
                                    <p className='text-xl'>{`Price  $${product.price}`}</p>
                                    <button onClick={()=>handleAddInCart(product)} className='border-1 bg-slate-600 rounded-md p-2 hover:bg-slate-800 text-white font-medium'>Add to Cart</button>
                                    <button className='border-1 bg-slate-600 rounded-md p-2 hover:bg-slate-800 text-white font-medium ml-2'><Link to={'/cart'} >Go To Cart</Link></button>
                                </article>
                            </li>
                        ))}
                    </ul>
                </div>
            )}
        </div>
    );
}

export default Shop;
