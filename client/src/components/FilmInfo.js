import './Circle.css';
import React from 'react';
import Helper from './Helper';
import notFoundPic from '../images/not-found-pic.png';
// import Background from '../API/back_batty.jpg';


class FilmInfo extends React.Component {
    state = { selectedVid: null };

    onVidSelect = (video) => {
        this.setState({ selectedVid: video });
    }
    render(props) {
        if (this.props.response === null) {
            return (
                <div className='maincomp' >
                    <img src='http://www.dream-wallpaper.com/free-wallpaper/movie-wallpaper/the-dark-knight-rises-2012-wallpaper/1680x1050/free-wallpaper-12.jpg' alt="YOu are Watching..." height='800px' width='100%' />
                    <div id="notfound" >
                        <div className="notfound">
                            <div className="notfound-404">
                                <h1>Search</h1>
                            </div>
                            <h2 className="font-style">Search for a movie</h2>
                            <div>

                            </div>
                        </div>
                    </div>
                </div>
            );
        }
        else
            if (this.props.response === "True") {
                return (
                    <div className='maincomp'>
                        <div className="container">
                            <div className="row">
                                <div className="col-xs-12 text-center">
                                    <h2 className="movie-main-title, myHomefont" style={{ color: '#F3BC0F', fontSize: '250%', marginBottom: '5%' }}>{this.props.title} ({this.props.year})</h2>
                                    {/* <div className="movie-genre, myHomefont" style={{ color: '#D1E8F0' }}>{this.props.genre}</div><br /> */}
                                </div>
                            </div>

                            <div className="row">
                                {/* <div className="col-md-3 col-sm-6, imaging">
                                    {this.props.poster === "N/A" ? (<a className="slide-item-wrap" itemProp="url" href={this.props.poster}><img itemProp="image" alt={this.props.title} src='https://www.nilfiskcfm.com/wp-content/uploads/2016/12/placeholder.png' className="img-responsive, imaging" /></a>)
                                        : (<a className="slide-item-wrap, imaging" itemProp="url" href="Image_is_not_Available"><img itemProp="image" alt="Image_is_not_Available" src={this.props.poster} className="img-responsive, imaging" /></a>)}
                                </div> */}
                                <div className="col-md-3 col-sm-6 " >
                                    {this.props.poster === "N/A" ? (<img className='imgD' style={{ boxShadow : '0 0 10px 5px #010404' }} alt={this.props.title} src='https://www.nilfiskcfm.com/wp-content/uploads/2016/12/placeholder.png' />)
                                        : (<img className='imgD' alt="Image_is_not_Available" style={{ boxShadow : '0 0 10px 5px #020808' }} src={this.props.poster} />)}
                                </div>

                                <div className="col-md-9 text-center"><br />
                                <div className="movie-genre, myHomefont" style={{ color: '#D1E8F0' }}>{this.props.genre}</div><br />

                                    <div className="movie-actors, myHomefont" style={{ color: '#EEEEEE' }}>{this.props.actors} </div><br />
                                    <div className="movie-desc, myHomefont" style={{ color: '#CAD0D2' }} >{this.props.plot}</div><br />

                                    <div className="row row-section, myHomefont">
                                        <div className="col-md-6 col-sm-6">
                                            <ul className="list-group text-left">
                                                <li className="list-group-item"><span className="pull-right">{this.props.country} </span> <span className="text-muted text-uppercase">country:</span></li>
                                                <li className="list-group-item"><span className="pull-right">{this.props.language}</span> <span className="text-muted text-uppercase">language:</span></li>
                                                <li className="list-group-item"><span className="pull-right">{this.props.runtime}</span> <span className="text-muted text-uppercase">run time:</span></li>
                                            </ul>
                                        </div>
                                        <div className="col-md-6 col-sm-6">
                                            <ul className="list-group text-left">
                                                <li className="list-group-item"><span className="pull-right">{this.props.release_date}</span> <span className="text-muted text-uppercase">Released:</span></li>
                                                <li className="list-group-item"><span className="pull-right">{this.props.imdbRating}</span> <span className="text-muted text-uppercase">Imdb Rating:</span></li>
                                                <li className="list-group-item"><span className="pull-right">{this.props.boxoffice}</span> <span className="text-muted text-uppercase">Box office:</span></li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="row row-section, myHomefont">
                                        <div className="col-md-12 col-sm-12">
                                            <ul className="list-group text-left">
                                                <li className="list-group-item"><span className="pull-right">{this.props.production} </span> <span className="text-muted text-uppercase">Company:</span></li>
                                                <li className="list-group-item"><span className="pull-right">{this.props.director}</span> <span className="text-muted text-uppercase">Director:</span></li>
                                                <li className="list-group-item"><span className="pull-right"><a href={this.props.website} target="_blank" rel="noopener noreferrer" >{this.props.website}</a></span> <span className="text-muted text-uppercase">Website:</span></li>
                                            </ul>
                                        </div>
                                        <div className="clearfix"></div>
                                        <div className="col-md-4" style={{ margin: '20px auto' }}>

                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* <div className="row align-items-center">
                                <div className="col-md-3 col-sm-6 text-center"><a href="http://trk.globwo.online/fcd7cda5-79be-4517-bb5d-dc45ed285d59"><img src="/images/ads/shd.png" alt="" /></a></div>
                                <div className="col-md-6 text-center"><a href="http://trk.globwo.online/fcd7cda5-79be-4517-bb5d-dc45ed285d59"><img src="/images/ads/dhd.png" alt="" /></a></div>
                            </div> */}


                            {/* <div className="row" style={{ margin: '20px auto' }}>
                                <div className="col-md-offset-3 col-md-6 col-xs-12">
                                    <h4 className="section-title">Trailer:</h4>
                                    <div className="embed-responsive embed-responsive-16by9">
                                        <iframe id="video-iframe" allowFullScreen="allowfullscreen" className="embed-responsive-item" src="//www.youtube.com/embed/uIlx5-aGq_A?rel=0&amp;hd=1"></iframe>
                                    </div>
                                </div>



                            </div> */}
                        </div>
                        <div style={{ marginTop: '-4%' }}>
                            <Helper />
                        </div>
                    </div>
                );
            }
            else {
                return (
                    <div className='maincomp'>
                    <div className='container' style={{ textAlign: 'center', marginTop: '5%' }}>
                        <div className="row">
                            <div className="col-md-3 col-sm-6">
                                <img src={notFoundPic} alt="Oops" />
                            </div>
                            <div className="col-md-6 col-sm-12" style={{ marginTop: '4%', color:'#CCE1E8' }}>
                                <h1 className='myHomefont'>Oops!</h1>
                                <h2 className="myHomefont">This Movie {this.props.title}is not found</h2>
                                <h4 className="myHomefont">The movie you are looking for might have been wrong spelled or is temporarily unavailable.</h4>
                            {/*    <h4 className="myHomefont">but you can watch these search related videos.</h4>*/}
                                <h3 className="myHomefont">thanks!</h3>
                            </div>
                        </div><br /><br /> <br /><br /><br /><br /> <br /><br />
                        
                    </div>
                    <div style={{ marginTop: '-4%' }}>
                    <Helper />
                </div>
                
                </div> 
                );
            }
    }
}



// export default FilmInfo;