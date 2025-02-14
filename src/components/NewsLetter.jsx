import React from 'react'

function NewsLetter() {
  return (
    <div className='w-full bg-[#2699fb] p-4'>
        <div className='max-w-[1240px] mx-auto md:flex justify-between py-[50px]'>
            <div className='m-2'>
                <h1 className='text-[20px] md:text-[40px] font-bold text-white'>Want to Learn latest I.T skills?</h1>
                <span className='text-white'>Sign up to our newsletter and stay up to date</span>
            </div>
            <div className='m-2 flex flex-col'>
                <input type="text" className='w-full rounded mb-2 p-3 mr-2 text-slate-600' placeholder='Email'/>
                <button className='bg-black text-white p-3 rounded'>Notify Me</button>
                <br />
                <p className='text-white'>
                    We care about the prediction of your data. Read our <br /> <a href='' className='text-black'>Privacy Policy</a>
                </p>
            </div>
        </div>
    </div>
  )
}

export default NewsLetter
