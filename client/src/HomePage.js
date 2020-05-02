import React from 'react';

import './Modules/homePage.css';
import './Modules/LoadStyle.css';

class HomePage extends React.Component {
    render() {

        return (
            <div className=''>
                {/* <video autoplay muted loop id="myVideo">
                    <source src={backVid} type="video/mp4" />
                        Your browser does not support HTML5 video.
                    </video> */}
                <section id="mic-view">
                    <div className="mic-area">

                    </div>
                </section>
                {/* <section className='' >
                    <div className='team-title'>
                        <p>Team Members</p>
                    </div>
                    <div id='team-section' className='row justify-content-center'>
                        <div className='team-cards'>
                            <img className='mem-avatar' alt='avatar' src={sanjuAvatar} />
                            <p className='team-content'>Priyanka</p>
                        </div>
                        <div className='team-cards'>
                        <img className='mem-avatar' alt='avatar' src={sanjuAvatar} />
                            <p className='team-content'>Sonal</p>
                        </div>
                        <div className='team-cards'>
                        <img className='mem-avatar' alt='avatar' src={sanjuAvatar} />
                            <p className='team-content'>Shital</p>
                        </div>
                    </div>
                </section>
                */}

            </div>
        );
    }

}
export default HomePage;
