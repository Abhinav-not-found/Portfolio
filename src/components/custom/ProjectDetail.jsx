import React, { useRef } from 'react'
import { gsap } from 'gsap'
import { ArrowLeft } from '@phosphor-icons/react'
import { useNavigate } from 'react-router-dom';

const ProjectDetail = () => {
  const navigate = useNavigate();
  const box = useRef(null)
  const arrow = useRef(null)
  const handleClick = () =>{
    // gsap.from(box.current,{
    //   scale:2,
    //   duration: 1,
    // })
  }
  const handleArrow=()=>{
    navigate('/')
  }
  return (
    <div>
      <div onClick={handleClick}  ref={box} className='w-[60%] h-screen m-auto py-10 bg-red-50' >
      <ArrowLeft ref={arrow} onClick={handleArrow} className='hover:bg-white rounded-full p-1 cursor-pointer transition-all duration-300' size={32} />
      </div>
    </div>
  )
}

export default ProjectDetail
