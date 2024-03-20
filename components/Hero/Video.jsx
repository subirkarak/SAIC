"use client"
import React, { useState, useEffect } from 'react';


const Video = ({videoId}) => {
    const [thumbnailUrl, setThumbnailUrl] = useState('');

    useEffect(() => {
      const fetchThumbnail = async () => {
        try {
          const response = await fetch(
            `"https://www.youtube.com/embed/34zymmMm2SE`

          );
          const data = await response.json();
          const thumbnailUrl = data.items[0].snippet.thumbnails.medium.url;
          setThumbnailUrl(thumbnailUrl);
        } catch (error) {
          console.log(error);
        }
      };
  
      fetchThumbnail();
    }, [videoId]);
  return (
    <div className='relative top-[950px] w-full md:top-[1050px]'>
         <div className="video-thumbnail">
      <a href={`https://www.youtube.com/embed/34zymmMm2SE`} target="_blank">
        <img src={thumbnailUrl} alt="Video Thumbnail" />
      </a>
    </div>
    </div>
  )
}

export default Video