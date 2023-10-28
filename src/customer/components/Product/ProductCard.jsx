import React from 'react'
import product from './Product'
import "./ProductCard.css"
import { useNavigate } from 'react-router-dom';


const ProductCard = ({ product }) => {

    const navigate = useNavigate();

    return (
        <div onClick={() => navigate(`/product/${product?._id}`)} className='productCard w-[15rem] m-3 transition-all cursor-pointer'>
            <div className='h-[20rem]'>
                <img className='h-full w-full object-cover object-left-top' src={product.imageUrl} />
            </div>
            <div className='textPart bg-white p-3 '>
                <div className='right-align'>
                    <p className='font-bold opacity-60'>{product.brand}</p>
                    <p classNam=''>{product.title}</p>
                </div>
                <div className='flex items-center space-x-2'>
                    <p className='font-semibold'>₹{product.discountedPrice}</p>
                    <p className='line-through opacity-50'>₹ {product.price}</p>
                    <p className='text-green-600 font-semibold'>{product.discountPercent}%</p>
                </div>

            </div>
        </div>
    )
}

export default ProductCard