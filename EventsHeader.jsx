import React from 'react'

function EventsHeader() {
  return (
<>
<div className="w-full h-[50vh] bg-zinc-100 flex items-center">


   <div className="heading w-9/10 m-auto flex flex-col items-center justify-center ">    <h1 className='font-bold text-5xl'>Upcoming College <span className='text-purple-500'>Events</span></h1>
   <p className='text-xl font-semibold py-4'>Discover the upcoming Hackathons and Events..!</p>
   <button className='bg-purple-500 px-3 py-2 rounded-lg mt-4 cursor-pointer hover:bg-purple-400'>Explore Events</button>
   </div>

</div>

</>
  )
}

export default EventsHeader