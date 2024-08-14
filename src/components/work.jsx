import React from 'react'
import work2 from '../../public/images/work2.jpg'

function Work() {
    return (
        <>
        <div className='md:px-44 pt-20 px-14 clr'>
            
            <div className='bg-purple-500  bg-opacity-5  rounded-xl space-y-3 '>
                <h1 className='flex justify-center  font-bold text-2xl p-8'>How it Works</h1>
                <div className='space-y-8 md:grid-cols-2 grid'>
                <div className='flex justify-center  mt-4'>
                <img className='rounded-full w-20 h-20' src={work2} alt="" />
                <div className='flex flex-col'>
                <h2 className='font-bold text-xl mt-4 ml-3'>Choose Your Genre</h2>
                <p className='font-semibold text-lg mt-2 ml-3'> select from a wide of geners or create a custom blend</p>
                </div>
                </div>
                <div className='flex justify-center '>
                <img className='rounded-full w-20 h-20' src={work2} alt="" />
                <div className='flex flex-col'>
                <h2 className='font-bold text-xl mt-4 ml-3'>Choose Your Genre</h2>
                <p className='font-semibold text-lg mt-2 ml-3'> select from a wide of geners or create a custom blend</p>
                </div>
                </div>
                <div className='flex justify-center '>
                <img className='rounded-full w-20 h-20' src={work2} alt="" />
                <div className='flex flex-col'>
                <h2 className='font-bold text-xl mt-4 ml-3'>Choose Your Genre</h2>
                <p className='font-semibold text-lg mt-2 ml-3'> select from a wide of geners or create a custom blend</p>
                </div>
                </div>
                <div className='flex mb-4 justify-center '>
                <img className='rounded-full w-20 h-20' src={work2} alt="" />
                <div className='flex flex-col'>
                <h2 className='font-bold text-xl mt-4 ml-3'>Choose Your Genre</h2>
                <p className='font-semibold text-lg mt-2 ml-3'> select from a wide of geners or create a custom blend</p>
                </div>
                </div>
                </div>
            
            
            
            </div>
                
                
        </div>

        <div className='clr mt-24'>
            <div className='flex flex-col space-y-5 '>
            <h1 className='text-center font-bold text-2xl'>Sample Books Genrated by BookAi</h1>
            <p className='text-center font-semibold text-xl'>Explore some of the captivating books created using our AI technology.</p>
        </div>
        </div>
        </>
    )
}

export default Work