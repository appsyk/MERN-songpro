import React from 'react';

class SpinSearch extends React.Component {
    render() {
        return (
            <div >
                <div className="modal fade" id="exampleModalCenter" tabIndex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
                    <div className="modal-dialog modal-dialog-centered, modWid" role="document">
                        <div className="modal-content" style={{ background: '#073946' }}>

                            <div className="modal-body">

                                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true" style={{ color: 'white' }}>&times;</span>
                                </button>
                                <div className='row'>
                                    <div className="modal-body">
                                        <img alt="I'm Invisible" width='150vh' height='150vh' style={{ borderRadius: '10vh' }} src='https://lh3.googleusercontent.com/W7zonJcIBvqr1iRUvS511jDc4iWV2r3Yt3Dj-VSEZvb8iRlNoRYGsraQVvTiYkUw2LT3McFKcVdF81k6NQ76kCfVLOjdsqPUglPyduTEy8x_Gb14iyexcOs7tl6JlL8F9GM3iGlEI8A9g0XRRYkX10mwiOi1-_T9DFKjysIfouGlylDfH2-7RwOS7J1PB0uQq25_6G-EET4TXXgK87yTcGty7vU8G5yDPmkCcdir22CsD8YqTyJT2mP6atp2SQIc7QBoj9xzSrGOgaS-mvuRk7Ww7L5ulRygTiRfG8T5kXsk1RXKu6aZYcHGELpLgOjTnRHx3_dmVCipWGj894ykqZl_1TOu2fxWD35bIMrHvLzil0raTRB7JkZLFimdkihGiRQDTgKfhGJsqa6LUefTBF9ukHAqlWfHxoj7uTiferEHvoU6XcakIKJDUpyrRY91HbhNN8BLE-83lpbNrgZ9LggX0mKQP47qARumzzfeXw2oke-WYEGjXZ4RXsgfMgFJJJtOcOBLdGPgHANGl4AOa3neGBXKQOCiwOOL-va3ic2R3th_XpFdw37tHrDSvmL0hGg7-nd77XAMj7B_3c2-RtlqEC8trDVWsxsBR_nIDhaHEgLu5FCOZ1gUKkKCpTPEiF05btRYpMKRbe2o1ZQiF6MqGG5WKaQ=w211-h233-no' />
                                    </div>
                                    <div className='modal-body float-left, logoName' style={{ color: 'rgb(2, 203, 252)' }}>
                                        <h3 className='myCard'>Sanjay D. Khatal</h3>
                                        <h4 className='myCard'>Computer Engineering</h4>
                                        <h4 className='myCard'>React Developer</h4>
                                        <h4 className='myCard'>2019</h4>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>

        );
    }
}

export default SpinSearch;