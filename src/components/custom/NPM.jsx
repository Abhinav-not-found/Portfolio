import React, { useRef, useState } from 'react'
import { gsap } from 'gsap'
import { ArrowLeft, CaretRight } from '@phosphor-icons/react'
import { useNavigate } from 'react-router-dom';
import '../../App.css'
import { ArrowUpRight, Check, Copy } from 'lucide-react';
import {Button} from '../ui/button'

const NPM = () => {
  const navigate = useNavigate();
  const box = useRef(null)
  const arrow = useRef(null)
  const [copySwitch,setCopySwitch] = useState(true)
  const handleClick = () =>{
    // gsap.from(box.current,{
    //   scale:2,
    //   duration: 1,
    // })
  }
  const handleArrow=()=>{
    navigate('/')
  }
  const handleCopyButton=()=>{
    setCopySwitch(!copySwitch)
    navigator.clipboard.writeText('npm i abhinav-mern-backend-template')
  }
  return (
    <div className='bg-[#CB0001]'>
      <div onClick={handleClick}  ref={box} className='w-[60%] h-fit m-auto py-10 text-white' >
      <ArrowLeft ref={arrow} onClick={handleArrow} className='hover:bg-white hover:text-black rounded-full p-1 cursor-pointer transition-all duration-300' size={32} />
      <div className='flex items-center justify-between'>
        <div>
          <p className='press-start-2p-regular text-white text-4xl mt-10'>NPM</p>
          <p className='text-xl font-semibold -mt-2'>Package</p>
        </div>
        <div className='text-right'>
          <p className='mt-8 text-poppins text-lg -mb-2'>For </p>
          <p className=' text-poppins text-lg'>MERN</p>
          <p className=' text-poppins text-lg -mt-2'>Backend</p>
        </div>
      </div>
      <div className='flex relative'>
          <h1 className='text-4xl font- w-1/2 mt-10 font-semibold'>Are you tired of writing repetitive backend setup code?</h1>
          <p className='w-1/2 mt-32 text-lg border border-white/80 p-4 rounded-md chat-notch'>Say hello to abhinav-mern-backend-template, the ultimate solution for automating and simplifying your backend setup.</p>
      </div>
      <div>
        <h1 className='text-4xl font-poppins font-semibold mt-20'>How to use you ask?</h1>
      </div>
      <div className='flex items-center justify-between mt-5 border border-white/80 px-5 py-3 rounded-md'>
        <div className='flex items-center gap-2'>
          <CaretRight size={15} />
          <p className='font-mono'>npm   i   abhinav-mern-backend-template</p>
        </div>
        <button onClick={handleCopyButton}>
          {copySwitch? (<Copy size={15} />):(
            <div className='flex items-center gap-1'>
              <Check size={15} /><p className='text-sm'>copied</p>
            </div>)}
        </button>
      </div>
      <div className='flex justify-between'>
        <div className='p-4 mt-10 border border-white rounded-md w-fit'>
          <p className='text-xl'>Simply install the package</p>
        </div>
        <div className='p-4 mt-10 border border-white rounded-md w-fit'>
          <p className='text-xl'>configure your .env file</p>
        </div>
        <div className='p-4 mt-10 border border-white rounded-md w-fit'>
          <p className=' text-xl'>and voilà — you're all set ✅ !</p>
        </div>
      </div>
      <div className='flex items-center gap-40 mt-20'>
        <div className='w-2/3'>
          <h2 className='text-3xl font-semibold'>Key Features</h2>
          <ul className='mt-8 space-y-4'>
            <li className='flex text-lg items-center gap-3'>
              <Check size={20} /> Automated backend setup
            </li>
            <li className='flex text-lg text-nowrap items-center gap-3'>
              <Check size={20} /> Pre-configured routes, models, and controllers
            </li>
            <li className='flex text-lg items-center gap-3'>
              <Check size={20} /> Scalable for large applications
            </li>
          </ul>
        </div>
        <div className='w-fit text-center'>
          <h2 className='text-3xl font-semibold'>Want to learn more?</h2>
          <p className='mt-4 text-lg'>Visit the official npm page to get the latest updates, documentation, and more.</p>
          <div className='mt-3'>
            <a href='https://www.npmjs.com/package/abhinav-mern-backend-template' target='_blank' rel='noopener noreferrer'>
              <Button className='bg-white text-[#CB0001] font-bold hover:bg-[#CB0001] hover:text-white border hover:border-white transition-all'>
                View on npm
                <ArrowUpRight size={15} />
              </Button>
            </a>
          </div>
        </div>
      </div>
      
      </div>
    </div>
  )
}

export default NPM
