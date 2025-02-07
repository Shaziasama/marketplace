import FontShowcase from '@/components/Brand'
import Hero from '@/components/Hero'
import React from 'react'
import Sell from './(pages)/products/sell'
import Shirts from './(pages)/products/shirts'
import BrowseByStyle from '@/components/BrowseByStyle'
import Reviews from '@/components/Reviews'
import CustomerCarousel from '@/components/Customer'
import Dress from './brands/page'
import Product from '@/components/arrivals'

const page = () => {
  return (
    <div>
      <Hero />
      <FontShowcase />
      <Product/>
      
     <CustomerCarousel />

      <Sell />
      <Shirts />
      <BrowseByStyle />
      <Reviews />
    </div>
  )
}

export default page

