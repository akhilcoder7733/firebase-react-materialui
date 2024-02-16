import React from 'react'
import Products from '../Products/Products'
import Welcome from '../Welcome/Welcome'
import CountUpComponent from '../CountUp/CountUp'
import Grid from '../Grid/GridPage'
import MarqueeCard from '../../Marquee/MarqueeCard'
import Sliders from '../../Swiper/Sliders'
import ImageSlider from '../../Swiper/ImageSlider'
import TypedComponent from '../../Typed/TypedComponent'

function Home({darkMode}) {
  return (
    <>
    <Welcome darkMode={darkMode}/>
    <CountUpComponent/>
    <Sliders/>
    <Products />
    <Grid/>
    <MarqueeCard/>
    <ImageSlider/>
    <TypedComponent/>
    </>
  )
}

export default Home
