import './greenfair/css/style.css';
import './greenfair/css/isotope/style.css';
import './greenfair/css/animate.min.css';
import './greenfair/css/bootstrap.min.css';
import './greenfair/css/carousel.css';
import './greenfair/css/font-awesome.min.css';
import './greenfair/css/responsive.css';

import React from 'react';
import axios from 'axios';

import SearchBar from './SearchBar';
import Youtube from './API/Youtube';
import VideoList from './Modules/VideoList';
import VideoDetail from './Modules/VideoDetail';
import HomePage from './HomePage';

import SpinSearch from './Modules/SpinSearch';

class CuTube extends React.Component {

    state = {
        vids: [],
        selectedVid: null,
        response: null

    };

    onTermSubmit = async (term) => {

        const response1 = await axios.get(`https://www.omdbapi.com/?t=${term}&apikey=af7bfde9`, {
            params: { query: term },
        });

        var response = await Youtube.get('/search', {
            params: {
                q: `feeling ${term} songs hindi and english`
            }
        }).catch(err => {
            if(err){
                alert(`There is a technical problem in our system and it's ${err.response.data.error.errors[0].reason}.\nPlease try again after some time or Enjoy watching liked videos.`)
                console.log(`There is a technical problem in our system and it's ${err.response.data.error.errors[0].reason}`)
            }
        })

        if(response){
            if (response.status === 200) {
                var msg = new SpeechSynthesisUtterance(`Your result is ready`);
                msg.volume = 1;
                msg.rate = 1;
                msg.pitch = 0.8;
                msg.lang = 'en-US';
                window.speechSynthesis.speak(msg);
            }else if(response.status === 404){
                var msg1 = new SpeechSynthesisUtterance(`No results found.........sorry`);
                msg1.volume = 1;
                msg1.rate = 1;
                msg1.pitch = 0.8;
                msg1.lang = 'en-US';
                window.speechSynthesis.speak(msg1);
            }
            else{
                var msg2 = new SpeechSynthesisUtterance(`We are preparing your result.`);
                msg2.volume = 1;
                msg2.rate = 1;
                msg2.pitch = 0.8;
                msg2.lang = 'en-US';
                window.speechSynthesis.speak(msg2);
            }
            console.log('checking response type for an error', response)
            this.setState({
                vids: response.data.items,
                response: response1.data.Response,
            })
        }

    };
    onVidSelect = (video) => {
        this.setState({ selectedVid: video });
    }


    render() {

        return (

            <div className="" >
                <div className="maincomp">

                    <SearchBar onFormSubmitProp={this.onTermSubmit} spinStop={this.state.response} />
                    {this.state.response ? (
                        <div className=''>
                            <div className=''>
                                <div><VideoDetail video={this.state.selectedVid} /></div>
                                {this.state.vids[0] === undefined ? (<div id='not-show1' style={{ textAlign: 'center' }} className='' >
                                    <div className="spinner-border" style={{ color: 'white', textAlign: 'center', width: '10rem', height: '10rem', fontSize: '30px', marginTop: '15%' }} role="status">
                                        <span className="sr-only">Loading...</span>
                                    </div>

                                </div>) : (<div className='' id='not-show1'>
                                    <iframe id="video-iframe" allowFullScreen="allowfullscreen" className="main-video-frame" title='video player' src={`https://www.youtube.com/embed/${this.state.vids[0].id.videoId}`} />
                                </div>)}

                                <div className='container' id='not-show2'>
                                    <h3 style={{ color: 'white' }}>Related Videos:</h3>
                                    <VideoList onSelectVid={this.onVidSelect} vidList={this.state.vids} key={this.state.vids} />
                                </div>

                                <SpinSearch />

                            </div>

                        </div>
                    ) : (
                            <HomePage />

                        )}
                </div>

            </div>
        );
    }
}

export default CuTube;