import React from 'react';
import { Grid, Rating, Box, Avatar } from '@mui/material';

const ProductReviewCard = () => {
  return (
    <div className="text-left">
      <div > {/* Create a flex container */}
        <Grid container spacing={2} gap={2}>
          <Grid item xs={1}>
            <Box>
              <Avatar className='text-white' sx={{ width: 56, height: 56, bgcolor: "#0C5DE8" }}>
                R
              </Avatar>
            </Box>
          </Grid>
          <Grid item xs={9}>
            <div className='space-y-2'>
              <div>
                <p>Ram</p>
                <p>April, 5, 2023</p>
              </div>
            </div>
            <Rating value={4.5} name='half-rating' precision={.5} />
            <p> The product is just awesome </p>
          </Grid>
        </Grid>
      </div>
    </div>
  );
}

export default ProductReviewCard;
