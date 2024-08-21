import React from 'react';

// const VideoBackground = () => {
//   return (
//     <div className=" w-screen  ">
//       <iframe
//         className='w-screen h-screen aspect-video'
//         src="https://www.youtube.com/embed/ee9i6oMqShk?autoplay=1&si=3aK8eePKwMRHhCbX"
//         title="YouTube video player"
//         frameBorder="0"
//         allow="autoplay; fullscreen"
//         allowFullScreen>
//       </iframe>

//     </div>
//   );
// };
const VideoBackground = () => {
  return (
    <div className="relative w-screen h-screen overflow-hidden">
      <iframe
        className="absolute top-0 left-0 w-full h-full object-cover"
        src="https://www.youtube.com/embed/6jpcUd5A5Jw?autoplay=1&mute=1&playsinline=1&controls=0"
        title="YouTube video player"
        frameBorder="0"
        allow="autoplay; picture-in-picture"
        allowFullScreen
      ></iframe>
    </div>
  );
};




export default VideoBackground;
