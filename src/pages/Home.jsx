import React from 'react'
import Announcement from '../components/Announcement';
import Categrories from '../components/Categrories';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar'
import Newsletter from '../components/Newsletter';
import Products from '../components/Products';
import Slider from '../components/Slider';

export const Home = () => {
  return (
    <div>
      <Announcement/>
      <Navbar/>
      <Slider/>
      <Categrories/>
      <Products/>
      <Newsletter/>
      <Footer/>
      </div>
  )
}
export default Home;
