import React, { useRef } from 'react'
import { gsap } from 'gsap'
import { useNavigate } from 'react-router-dom';

const Card = () => {
  const navigate = useNavigate();
  const box = useRef(null)
  const handleClick = () =>{
    navigate('/projectDetail')
    // console.log('Click')
    // gsap.to(box.current,{
    //   width:'200vh',
    //   scaleX:1.7
    // })
  }
    const handleMouseEnter = () =>{
      gsap.to(box.current,{
        y:-10,
      })
    }
    const handleMouseLeave = () =>{
      gsap.to(box.current,{
        y:0,
      })
    }
  return (
    <div onClick={handleClick} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} ref={box} className='w-[18em] h-[25em] bg-stone-100 border border-black rounded-md'>
      
    </div>
  )
}

export default Card
