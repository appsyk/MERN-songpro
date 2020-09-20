import React from 'react';
import axios from 'axios';

const VideoDetail = ({ video }) => {

    if (!video) {
        return (
            <div >
            </div>
        );
    }

    const userNm = localStorage.getItem('userNm');

    const selarr = [];

    axios.get('/api/like')
        .then(res => {
            res.data.map((dt) => {
                if (dt.user === userNm && dt.data.id.videoId === video.id.videoId && dt.isLike === true) {
                    selarr.push(video.id.videoId);
                } 
                // else console.log(2, dt.data.id.videoId, '===', video.id.videoId, '==', dt.user, '===', dt.isLike)
            })
        })

    setTimeout(() => {
        if(!userNm){
            document.querySelector('#is-user').style.display='none';
        }else
        if (selarr.length !== 0) {
            document.querySelector('.like-btn').style.display = 'none';
            document.querySelector('#already-liked').style.display = 'block';
        }else{
            document.querySelector('.like-btn').style.display = 'block';
            document.querySelector('#already-liked').style.display = 'none';
        }
    }, 1000);

    

    const likeBtn = () => {
        const user = userNm;
        const data = video;
        const isLike = true;
        axios.post('/api/like', { user, data, isLike })
            .then(res => {
                
                if (res.status === 200) {
                    document.querySelector('.like-btn').style.display = 'none';
                    document.querySelector('#already-liked').style.display = 'block';
                }
            })
            .catch(err => alert ('Error: ',err))
    }

    const VidSrc = `https://www.youtube.com/embed/${video.id.videoId}`;

    return (
        <div className="modal fade" id="exampleModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog" role="document">
                <div className="modal-content" style={{ background: '#073946' }} >
                    <div className="modal-header">
                        <h5 className="modal-title, myHomefont" id="exampleModalLabel" style={{ color: 'rgb(243, 188, 15)' }} >{video.snippet.title}</h5>
                        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true" title='close' style={{ color: 'white' }}>&times;</span>
                        </button>
                        <div id='is-user'>
                        <div className="like-btn" onClick={likeBtn}>
                            <i className="fa fa-heart-o fa-2x"></i>
                        </div>
                        <div id='already-liked' style={{ display: 'none' }} className="like-btn">
                            <i className="fa fa-heart fa-2x" aria-hidden="true"></i>
                        </div>
                        </div>
                    </div>
                    <div className="modal-body">
                        <iframe id="video-iframe" allowFullScreen="allowfullscreen" style={{ height: '300px', width: '100%' }} className="" title='video player' src={VidSrc} />

                    </div>

                </div>
            </div>
        </div>
    );
}

export default VideoDetail;