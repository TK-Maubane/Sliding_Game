import React, {useState} from 'react'
import attempt from '../../rick_morty'
import NavBar from '../Navbar'
import Carousel from './carousel'
import { CarouselContainer, CarouselInner, CarouselBg } from './galleryElements'
import floral_black_wallpaper from '../../public/floral_black_wallpaper.jpg'



const GallerySection = () => {
    
    
    return (
        <>
        <NavBar/>

        <CarouselContainer>
                <Carousel images={attempt}/>
        </CarouselContainer>
        

        
        </>

    )
}

export default GallerySection
