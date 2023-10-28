import { useEffect, useState } from 'react'
import { StarIcon } from '@heroicons/react/20/solid'
import { RadioGroup } from '@headlessui/react'
import { Button, Box, LinearProgress, Grid, Rating } from '@mui/material'
import ProductReviewCard from './ProductReviewCard'
import { mens_kurta } from '../../../Data/mens_kurta';
import HomeSectionCard from '../HomeSectionCard/HomeSectionCard'
import { useNavigate, useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { findProductsById } from '../../../State/Product/Action'
import { addItemToCart } from '../../../State/Cart/Action'

const product = {
  name: 'Basic Tee 6-Pack',
  price: '$192',
  href: '#',
  breadcrumbs: [
    { id: 1, name: 'Men', href: '#' },
    { id: 2, name: 'Clothing', href: '#' },
  ],
  images: [
    {
      src: 'https://tailwindui.com/img/ecommerce-images/product-page-02-secondary-product-shot.jpg',
      alt: 'Two each of gray, white, and black shirts laying flat.',
    },
    {
      src: 'https://tailwindui.com/img/ecommerce-images/product-page-02-tertiary-product-shot-01.jpg',
      alt: 'Model wearing plain black basic tee.',
    },
    {
      src: 'https://tailwindui.com/img/ecommerce-images/product-page-02-tertiary-product-shot-02.jpg',
      alt: 'Model wearing plain gray basic tee.',
    },
    {
      src: 'https://tailwindui.com/img/ecommerce-images/product-page-02-featured-product-shot.jpg',
      alt: 'Model wearing plain white basic tee.',
    },
  ],
  colors: [
    { name: 'White', class: 'bg-white', selectedClass: 'ring-gray-400' },
    { name: 'Gray', class: 'bg-gray-200', selectedClass: 'ring-gray-400' },
    { name: 'Black', class: 'bg-gray-900', selectedClass: 'ring-gray-900' },
  ],
  sizes: [
    { name: 'XXS', inStock: false },
    { name: 'XS', inStock: true },
    { name: 'S', inStock: true },
    { name: 'M', inStock: true },
    { name: 'L', inStock: true },
    { name: 'XL', inStock: true },
    { name: '2XL', inStock: true },
    { name: '3XL', inStock: true },
  ],
  description:
    'The Basic Tee 6-Pack allows you to fully express your vibrant personality with three grayscale options. Feeling adventurous? Put on a heather gray tee. Want to be a trendsetter? Try our exclusive colorway: "Black". Need to add an extra pop of color to your outfit? Our white tee has you covered.',
  highlights: [
    'Hand cut and sewn locally',
    'Dyed with our proprietary colors',
    'Pre-washed & pre-shrunk',
    'Ultra-soft 100% cotton',
  ],
  details:
    'The 6-Pack includes two black, two white, and two heather gray Basic Tees. Sign up for our subscription service and be the first to get new, exciting colors, like our upcoming "Charcoal Gray" limited release.',
}
const reviews = { href: '#', average: 4, totalCount: 117 }

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function ProductDetails() {

  const [selectedSize, setSelectedSize] = useState("")
  const navigate = useNavigate();
  const params=useParams();
  const dispatch=useDispatch();
  const {products}= useSelector(store=>store);



  const handleAddToCart = () => {
    const data= {productId:params.productId, size:selectedSize.name}
    console.log("Data....", data)
    dispatch(addItemToCart(data))
    navigate("/cart")

  }
  useEffect(() => {
    if (params.productId) {
      dispatch(findProductsById({ productId: params.productId }));
    } else {
      console.error("productId is undefined");
      // Handle the case when productId is not defined
    }
  }, [dispatch, params.productId]);


  return (
    <div className="bg-white">
      <div className="pt-6">
        <nav aria-label="Breadcrumb">
          <ol role="list" className="mx-auto flex max-w-2xl items-center space-x-2 px-4 sm:px-6 lg:max-w-7xl lg:px-8">
            {product.breadcrumbs.map((breadcrumb) => (
              <li key={breadcrumb.id}>
                <div className="flex items-center">
                  <a href={breadcrumb.href} className="mr-2 text-sm font-medium text-gray-900">
                    {breadcrumb.name}
                  </a>
                  <svg
                    width={16}
                    height={20}
                    viewBox="0 0 16 20"
                    fill="currentColor"
                    aria-hidden="true"
                    className="h-5 w-4 text-gray-300"
                  >
                    <path d="M5.697 4.34L8.98 16.532h1.327L7.025 4.341H5.697z" />
                  </svg>
                </div>
              </li>
            ))}
            <li className="text-sm">
              <a href={product.href} aria-current="page" className="font-medium text-gray-500 hover:text-gray-600">
                {product.name}
              </a>
            </li>
          </ol>
        </nav>
        <section className='grid grid-cols-1 lg:grid-cols-2 gap-x-8 gap-y-10 px-4 pt-10'>
          {/* Image gallery */}
          <div className="flex flex-col items-center">
            <div className="overflow-hidden rounded-lg max-w-[30rem] max-h-[35rem]">
              <img
                src={products.products?.imageUrl}
                alt={product.images[0].alt}
                className="h-full w-full object-cover object-center"
              />
            </div>
            <div className="flex flex-wrap space-x-5 justify-center">
              {product.images.map((item) => <div className="aspect-h-2 aspect-w-3 overflow-hidden rounded-lg max-w-[5rem] max-h-[5rem] mt-4">
                <img
                  src={item.src}
                  alt={item.alt}
                  className="h-full w-full object-cover object-center"
                />
              </div>)}
            </div>

          </div>
          {/* Product info */}
          <div className="mx-auto max-w-2xl px-4 pb-16 pt-10 sm:px-6 lg:grid lg:max-w-7xl lg:grid-cols-3 lg:grid-rows-[auto,auto,1fr] lg:gap-x-8 lg:px-8 lg:pb-24 lg:pt-16">
            <div className="lg:col-span-2 lg:border-r lg:border-gray-200 lg:pr-8">
              <h1 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">{products.products?.brand}</h1>
              <h1 className="text-lg lg:text-xl text-gray-900 opacity-60 pt-1">{products.products?.title}</h1>
            </div>

            {/* Options */}
            <div className="mt-4 lg:row-span-3 lg:mt-0">
              <h2 className="sr-only">Product information</h2>


              <div className="flex space-x-5 items-center text-lg lg:text-xl text-gray-900 mt-6">
                <p className="font-semibold">₹ {products.products?.discountedPrice}</p>
                <p className="opacity-50 line-through">₹ {products.products?.price}</p>
                {/* <p className="text-green-600 font-semibold">{products.products?.discountedPrice} % off</p> */}
              </div>


              {/* Reviews */}
              <div className="mt-6">
                <div className="flex items-center space-x-3">
                  <Rating name="read-only" value={3.5} readOnly precision={.5} />
                  <p className="opacity-50 text-sm"> 5244 Rating</p>
                  <p className="ml-3 text-sm font-medium text-indigo-600 hover:text-indigo-500"> 387 Reviews</p>
                </div>

              </div>

              <form className="mt-10">
                {/* Colors */}
                <div>
                  <h3 className="text-sm font-medium text-gray-900">Color</h3>

                  <RadioGroup 
                  // value={selectedColor} onChange={setSelectedColor} 
                  className="mt-4">
                    <RadioGroup.Label className="sr-only">Choose a color</RadioGroup.Label>
                    <div className="flex items-center space-x-3">
                      {product.colors.map((color) => (
                        <RadioGroup.Option
                          key={color.name}
                          value={color}
                          className={({ active, checked }) =>
                            classNames(
                              color.selectedClass,
                              active && checked ? 'ring ring-offset-1' : '',
                              !active && checked ? 'ring-2' : '',
                              'relative -m-0.5 flex cursor-pointer items-center justify-center rounded-full p-0.5 focus:outline-none'
                            )
                          }
                        >
                          <RadioGroup.Label as="span" className="sr-only">
                            {color.name}
                          </RadioGroup.Label>
                          <span
                            aria-hidden="true"
                            className={classNames(
                              color.class,
                              'h-8 w-8 rounded-full border border-black border-opacity-10'
                            )}
                          />
                        </RadioGroup.Option>
                      ))}
                    </div>
                  </RadioGroup>
                </div>

                {/* Sizes */}
                <div className="mt-10">
                  <div className="flex items-center justify-between">
                    <h3 className="text-sm font-medium text-gray-900">Size</h3>
                    <a href="#" className="text-sm font-medium text-indigo-600 hover:text-indigo-500">
                      Size guide
                    </a>
                  </div>

                  <RadioGroup value={selectedSize} onChange={setSelectedSize} className="mt-4">
                    <RadioGroup.Label className="sr-only">Choose a size</RadioGroup.Label>
                    <div className="grid grid-cols-4 gap-4 sm:grid-cols-8 lg:grid-cols-4">
                      {product.sizes.map((size) => (
                        <RadioGroup.Option
                          key={size.name}
                          value={size}
                          disabled={!size.inStock}
                          className={({ active }) =>
                            classNames(
                              size.inStock
                                ? 'cursor-pointer bg-white text-gray-900 shadow-sm'
                                : 'cursor-not-allowed bg-gray-50 text-gray-200',
                              active ? 'ring-2 ring-indigo-500' : '',
                              'group relative flex items-center justify-center rounded-md border py-3 px-4 text-sm font-medium uppercase hover:bg-gray-50 focus:outline-none sm:flex-1 sm:py-6'
                            )
                          }
                        >
                          {({ active, checked }) => (
                            <>
                              <RadioGroup.Label as="span">{size.name}</RadioGroup.Label>
                              {size.inStock ? (
                                <span
                                  className={classNames(
                                    active ? 'border' : 'border-2',
                                    checked ? 'border-indigo-500' : 'border-transparent',
                                    'pointer-events-none absolute -inset-px rounded-md'
                                  )}
                                  aria-hidden="true"
                                />
                              ) : (
                                <span
                                  aria-hidden="true"
                                  className="pointer-events-none absolute -inset-px rounded-md border-2 border-gray-200"
                                >
                                  <svg
                                    className="absolute inset-0 h-full w-full stroke-2 text-gray-200"
                                    viewBox="0 0 100 100"
                                    preserveAspectRatio="none"
                                    stroke="currentColor"
                                  >
                                    <line x1={0} y1={100} x2={100} y2={0} vectorEffect="non-scaling-stroke" />
                                  </svg>
                                </span>
                              )}
                            </>
                          )}
                        </RadioGroup.Option>
                      ))}
                    </div>
                  </RadioGroup>
                </div>
                <Button onClick={handleAddToCart} variant="contained" color="secondary" sx={{
                  px: "3rem",
                  py: "1rem",
                  margin: "1rem",
                  bgcolor: "#0E57D7",
                  '&:hover': {
                    bgcolor: "#0143B6"
                  }
                }}>
                  Add to Cart
                </Button>
              </form>
            </div>

            <div className="py-10 lg:col-span-2 lg:col-start-1 lg:border-r lg:border-gray-200 lg:pb-16 lg:pr-8 lg:pt-6">
              {/* Description and details */}
              <div className="text-left">
                <h3 className="sr-only">Description</h3>

                <div className="space-y-6">
                  <p className="text-base text-gray-900">{product.description}</p>
                </div>
              </div>

              <div className="mt-10 text-left">
                <h3 className="text-sm font-medium text-gray-900">Highlights</h3>

                <div className="mt-4 ">
                  <ul role="list" className="list-disc space-y-2 pl-4 text-sm">
                    {product.highlights.map((highlight) => (
                      <li key={highlight} className="text-gray-400">
                        <span className="text-gray-600">{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="mt-10 text-left">
                <h2 className="text-sm font-medium text-gray-900">Details</h2>

                <div className="mt-4 space-y-6">
                  <p className="text-sm text-gray-600">{product.details}</p>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* rating and review  */}
        <section>
          <h1 className="font-semibold text-lg pb-4">
            Recent Reviews and Ratings
          </h1>
          <div className="border p-5 text-left">
            <Grid container spacing={3}>
              <Grid item xs={7}>
                <div className="space-y-5">
                  {[1, 1, 1, 1].map((item) => <ProductReviewCard />)}
                </div>
              </Grid>
              <Grid item xs={5}>
                <h1 className="text-xl font-semibold pb-1 text-left">Product Rating</h1>
                <div className="flex items-center space-x-3">
                  <Rating value={4.5} name="half-rating" precision={0.5} />
                  <p className="opacity-60">5485 Ratings</p>
                </div>
                <Box className='mt-5'>
                  <Grid container alignItems="center" gap={2}>
                    <Grid items xs={2}>
                      <p>Excellent</p>
                    </Grid>
                    <Grid item xs={7}>
                      <LinearProgress sx={{ bgcolor: "#dododo", borderRadius: 4, height: 7 }}
                        variant="determinate" value={40} color="success" />
                    </Grid>
                  </Grid>
                </Box>

                <Box className='mt-5'>
                  <Grid container alignItems="center" gap={2}>
                    <Grid items xs={2}>
                      <p>Very Good</p>
                    </Grid>
                    <Grid item xs={7}>
                      <LinearProgress sx={{ bgcolor: "#dododo", borderRadius: 4, height: 7 }}
                        variant="determinate" value={60} color="success" />
                    </Grid>
                  </Grid>
                </Box>

                <Box className='mt-5'>
                  <Grid container alignItems="center" gap={2}>
                    <Grid items xs={2}>
                      <p>Good</p>
                    </Grid>
                    <Grid item xs={7}>
                      <LinearProgress sx={{ bgcolor: "#dododo", borderRadius: 4, height: 7 }}
                        variant="determinate" value={50} color="success" />
                    </Grid>
                  </Grid>
                </Box>

                <Box className='mt-5'>
                  <Grid container alignItems="center" gap={2}>
                    <Grid items xs={2}>
                      <p>Average</p>
                    </Grid>
                    <Grid item xs={7}>
                      <LinearProgress sx={{ bgcolor: "#dododo", borderRadius: 4, height: 7 }}
                        variant="determinate" value={20} color="warning" />
                    </Grid>
                  </Grid>
                </Box>
                <Box className='mt-5'>
                  <Grid container alignItems="center" gap={2}>
                    <Grid items xs={2}>
                      <p>Poor</p>
                    </Grid>
                    <Grid item xs={7}>
                      <LinearProgress sx={{ bgcolor: "#dododo", borderRadius: 4, height: 7 }}
                        variant="determinate" value={5} color="error" />
                    </Grid>
                  </Grid>
                </Box>

              </Grid>
            </Grid>
          </div>
        </section>
        {/* similar products and recommendation */}
        <section className='pt-10'>
          <h1 className='py-5 text-xl font-bold'>Similar Product</h1>
          <div className=' flex flex-wrap space-y-5'>
            {mens_kurta.map((item) => <HomeSectionCard product={item} />)}
          </div>

        </section>

      </div>
    </div>
  )
}
