import React from 'react'
import laptop from '../assets/laptop.jpg'

function Experts() {
  return (
    <div className='max-w-[1240px] p-2 mx-auto my-10 md:grid grid-cols-2'>
        <div className='col-span-1 md:w-[80%] text-center'>
            <img src={laptop} alt="" className='inline'/>
        </div>
        <div className='col-span-1 flex flex-col justify-center'>
            <h1 className='text-[#00df9a] font-bold my-2'>LEARN FROM EXPERTS</h1>
            <p className='my-2 text-justify'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Explicabo tempore dolores unde voluptates, officiis, quam aspernatur eum nobis architecto sint facere id labore hic repellat est iusto. Fugit, quo, odio possimus in incidunt aliquam harum nesciunt quam adipisci repellat minima?s</p>
            <button className='md:w-[30%] bg-black text-white p-3 rounded'>Get Started</button>
        </div>
    </div>
  )
}

export default Experts
