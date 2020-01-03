import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import Sidebar from './Sidebar'

export default function BaseLayout(props) {
  return (
    <>
      <Navbar />
      <Sidebar />
      {props.children}
      <Footer />
    </>
  )
}
