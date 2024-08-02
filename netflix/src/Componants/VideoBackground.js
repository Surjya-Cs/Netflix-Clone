import React from 'react';

const VideoBackground = () => {
    return (
        <div className=" w-screen  ">
        {/* <iframe
        //   className=" top-0 left-0 w-full h-full"
        className='w-screen aspect-video'
          src="https://www.youtube.com/embed/c3rPTrK1tbI?si=3aK8eePKwMRHhCbX&autoplay=1"
          title="YouTube video player"
          frameBorder="0"
          allowFullScreen
        ></iframe> */}
        {/* <div className="absolute top-0 left-0 w-full z-10">
          <Header /> 
        </div> */}


        <iframe 
        className=' w-screen aspect-video'
         src="https://www.youtube.com/embed/7PIji8OubXU?si=3aK8eePKwMRHhCbX" 
         title="YouTube video player" 
         frameborder="0"  allowfullscreen></iframe>
      </div>
    );
};

export default VideoBackground;
