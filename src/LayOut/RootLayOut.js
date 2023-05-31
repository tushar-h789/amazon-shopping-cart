import React from 'react'
import Header from '../components/Header/Header'
import Product from '../components/product/Product'
import Banner from '../components/bannar/Bannar'
import { Outlet } from 'react-router-dom'

const RootLayOut = () => {
  return (
    <div>
        <Header></Header>
        <Outlet></Outlet>
    </div>
  )
}

export default RootLayOut