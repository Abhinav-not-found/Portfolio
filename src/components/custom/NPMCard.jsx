import React, { useRef } from 'react'
import { gsap } from 'gsap'
import { useNavigate } from 'react-router-dom';
import '../../App.css'
import node from '../../assets/images/Nodejs.png'
import express from '../../assets/images/Expressjs.png'
import mongo from '../../assets/images/Mongodb.png'

const NPMCard = () => {
  const navigate = useNavigate();
  const box = useRef(null)
  const handleClick = () =>{
    navigate('/projectDetail/npm')
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

    const style = `w-[18em] h-[25em] border border-black cursor-pointer rounded-md p-5 bg-[#CB0001] relative`
  return (
    <div onClick={handleClick} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} ref={box} className={style}>
      <p className='press-start-2p-regular text-white text-3xl'
      >{'NPM'}</p>
      <p className='text-white capitalize text-lg'>{'package'}</p>
        <img src={node} alt="nodejsIcon" className='h-auto w-20 opacity-90 absolute right-0 bottom-[4.8em] rotate-[15deg]' />
        <img src={express} alt="nodejsIcon" className='h-auto w-20 opacity-90 absolute bottom-0 right-4 -rotate-[8deg]' />
        <img src={mongo} alt="nodejsIcon" className='h-auto w-20 opacity-90 absolute -bottom-[5px] right-[4.6em] rotate-[25deg]' />
    </div>
  )
}

export default NPMCard
