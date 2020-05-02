import React from 'react';
import VideoItem from './VideoItem';

const VideoList = ({ vidList, onSelectVid }) => {
    // const firstVid = vidList[1];

        

    const rendList = vidList.map((vid) => {

        return <VideoItem onVideoSelect={onSelectVid} key={vid.id.videoId} video={vid} />
        
    });
        return(
            <div id='youtube-result-row' key={Date.now()} className='row justify-content-center'>
                {rendList}
                {/* <VidRender firstVid={firstVid} /> */}
            </div>
        );
    }

export default VideoList;
