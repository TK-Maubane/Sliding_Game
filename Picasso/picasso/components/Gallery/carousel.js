import React, {useState} from 'react';
import attempt from '../../rick_morty';
import { FaArrowCircleRight , FaArrowCircleLeft} from 'react-icons/fa'


const Carousel = ({ images }) => {
  const [current, setCurrent] = useState(0)
  const length = attempt.length

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0: current + 1 )
  }

  const prevSlide = () => {
    setCurrent(current ===  0? length - 1: current - 1 )
  }

  if(!Array.isArray(images) || images.length <= 0) {
    return null
  }

  return (
      <section className='slider'>
        
        <FaArrowCircleLeft className='left-arrow' onClick={prevSlide}/>
        <FaArrowCircleRight className='right-arrow'onClick={nextSlide} />

        {attempt.map((pic, index)=>{
        return ( 
          <div className={index === current ? 'slide-active': 'slide'} key={index}>
            {index === current && (
              <img src={pic.img} alt='pic of Picasso' className='image'/>
            )}
          </div>
          )
        })
      }
    </section>
  )
}
export default Carousel;
