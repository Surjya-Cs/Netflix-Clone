import React from 'react';
import { FaPlay } from "react-icons/fa";
import { MdOutlineQueuePlayNext } from "react-icons/md";

// const VideoTitle = () => {
//   return (
//     <div className=' w-screen aspect-video absolute top-1/2 left-8 transform -translate-y-1/2 text-white p-6'>
//       <h1 className='text-3xl font-bold '>USer ka Name</h1>
//       <p className='mt-2'>Lorem ipsum dolor sit, amet consectetur adipisicing elit..</p>
//       <div className='mt-4 flex'>
//         <button className=' flex items-center px-6 py-2 bg-red-600 text-white rounded-sm mr-4 hover:bg-opacity-85'>
//         <FaPlay size='20px' color='black'/>
//         <span className=' ml-1 font-bold'>Play</span>
//         </button>
//         <button className=' flex items-center px-6 py-2 bg-gray-700 text-white rounded-sm hover:bg-opacity-85'>
//         <MdOutlineQueuePlayNext size='24px' color='black'/>
//         <span className=' ml-1 font-bold'>Watch More</span></button>
//       </div>
//     </div>
//   );
// };
const VideoTitle = () => {
  return (
    <div className='absolute top-0 left-0 w-full h-full flex items-center justify-start p-6'>
      <div className='text-white max-w-xs'>
        <h1 className='text-3xl font-bold mb-2'>USer ka Name</h1>
        <p className='mb-4'>Lorem ipsum dolor sit, amet consectetur adipisicing elit..</p>
        <div className='flex'>
          <button className='flex items-center px-6 py-2 bg-red-600 text-white rounded-sm mr-4 hover:bg-red-700'>
            <FaPlay size='20px' color='black' />
            <span className='ml-1 font-bold'>Play</span>
          </button>
          <button className='flex items-center px-6 py-2 bg-gray-700 text-white rounded-sm hover:bg-gray-800'>
            <MdOutlineQueuePlayNext size='24px' color='black' />
            <span className='ml-1 font-bold'>Watch More</span>
          </button>
        </div>
      </div>
    </div>
  );
};


export default VideoTitle;
