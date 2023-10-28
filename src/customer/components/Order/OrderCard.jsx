import React from 'react'
import { Grid } from '@mui/material'
import AdjustIcon from '@mui/icons-material/Adjust';
const OrderCard = () => {
    return (
        <div className='p-5 shadow-lg hover:shadow-2xl border'>
            <Grid container spacing={2} sx={{ justifyContent: "space-between" }}>
                <Grid item xs={6}>
                    <div className='flex cursor-pointer'>
                        <img className='w-[5rem] h-[5rem] object-cover object-top' src="https://tailwindui.com/img/ecommerce-images/product-page-02-secondary-product-shot.jpg"
                            alt="" />
                        <div className='ml-5 space-y-2 text-left'>
                            <p className=''> Men Slim  Rise Black Jeans</p>
                            <p className='opacity-50 tex-xs font-semibold'> Size:M</p>
                            <p className='opacity-50 tex-xs font-semibold'> Color: Black</p>
                        </div>
                    </div>
                </Grid>
                <Grid item xs={2}>
                    <p> ₹ 1099</p>
                </Grid>

                <Grid item xs={4}>
                    {true && <div>
                        <p>
                            <AdjustIcon sx={{ width: "15px", height: "15px" }} className='text-green-600 mr-2 text-sm' />
                            <span>
                                Delivered On March 03
                            </span>
                        </p>
                        <p className='text-xs'>Your Item has been delivered</p>
                        </div>}
                        {false && <p>
                            <span>
                                Expected Delivery on March 03
                            </span>
                        </p>}
                    </Grid>
            </Grid>
        </div>
    )
}

export default OrderCard