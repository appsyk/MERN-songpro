import './card.css';
import React from 'react';

const VideoItem = ({ video, onVideoSelect }) => {

  return (

    <div className='like-cards-ytlist' onClick={() => onVideoSelect(video)} type="button" key={video.id.videoId}>
      <div className="card-con" data-toggle="modal" data-target="#exampleModal" >
        <center>
          <img className="liked-img" src={video.snippet.thumbnails.medium.url} alt='img'/>
        </center>
        <p className="liked-title" >{video.snippet.title}</p>
        <p className="liked-des">{video.snippet.description}</p>
      </div>
    </div>

  );
};

export default VideoItem;
