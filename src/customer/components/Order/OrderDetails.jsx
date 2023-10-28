import React from 'react'
import AddressCard from '../CheckOut/AddressCard'
import OrderTracker from './OrderTracker'
import { Box, Grid } from '@mui/material'
import StarBorderIcon from '@mui/icons-material/StarBorder';
import { deepPurple } from '@mui/material/colors';
const OrderDetails = () => {
  return (
    <div className='text-left px:5 lg:px-20'>
      <div>
        <h1 className='font-bold text-cl py-7 '>

        </h1>
        <AddressCard />

      </div>
      <div className='py-10'>
        <OrderTracker activeStep={2} />
      </div>

      <Grid className='space-y-5' container>
    {[1,1,1,1].map((item)=>
    <Grid item container className='shadow-xl rounded-md p-5 border' sx={{ alignItems: "container", justifyContent: 'space-between' }}>

<Grid item xs={6}>
  <div className='flex items-center space-x-2'>
    <img className='w-[5rem] h-[5rem] object-cover object-top' src="https://rukminim1.flixcart.com/image/550/650/xif0q/shirt/b/d/f/3xl-13-lstr-wine-vtexx-original-imagnzbummhkgr7p.jpeg?q=90&crop=false" alt="" />
    <div className='space-y-2 ml-5'>
      <p className='font-semibold'> Men Slim Mid Rise Jeans</p>
      <p className='space-x-5 opacity-50 text-xs font-semibold'><span> Color:Pink</span><span>Size:M</span></p>
      <p>Seller:Linaria</p>
      <p>rs1099</p>
    </div>
  </div>
</Grid>


<Grid item>
<Box sx={{color:deepPurple[500]}}>

  <StarBorderIcon sx={{fontSize:"2rem"}} className='px-2 text-5xl'/>
  <span>Rate  & Review product</span>
</Box>

</Grid>   




</Grid>)}
        
      </Grid>
    </div>
  )
}

export default OrderDetails