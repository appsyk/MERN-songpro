import React from 'react';
import Login from './components/Login';
import playIcon from './images/play-icon.png';
import axios from 'axios';

const userNm = localStorage.getItem('userNm');

class FirebaseIntegrate extends React.Component {

  state = {
    likedList: [],
    allLikedList: false,
    selectedVid: '',
    selVidTitle: ''
  }

  voiceFunc() {
    var msg = new SpeechSynthesisUtterance(`${userNm}...........this is your favorite videos list`);
    msg.volume = 1;
    msg.rate = 1;
    msg.pitch = 0.8;
    msg.lang = 'en-US';
    window.speechSynthesis.speak(msg);
  }

  videoModal(e) {
    if (!this.state.selectedVid) {
      console.log("click to view video", this.state.selectedVid)
    }
    const videoSrc = `https://www.youtube.com/embed/${this.state.selectedVid}`;
    return (
      <div>
        <div className="modal fade" id="exampleModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
          <div className="modal-dialog" role="document">
            <div className="modal-content" style={{ background: '#073946' }} >
              <div className="modal-header">
                <h5 className="modal-title, myHomefont" id="exampleModalLabel" style={{ color: 'rgb(243, 188, 15)' }} >{this.state.selVidTitle}</h5>
                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true" title='close' style={{ color: 'white' }}>&times;</span>
                </button>
              </div>
              <div className="modal-body">
                <iframe src={videoSrc} id="video-iframe" allowFullScreen="allowfullscreen" style={{ height: '300px', width: '100%' }} className="" title='video player' />

              </div>

            </div>
          </div>
        </div>
      </div>
    );
  }

  componentDidMount() {
    axios.get('/api/like')
      .then(res => {
        this.setState({
          likedList: res.data
        })
      })
      .catch(err => alert('Error: ', err))
  }
  render() {
    // let likedArray = [];
    // for (let i = 0; i < 100; i++) {
    //   var test = JSON.parse(localStorage.getItem(`liked${i}`));
    //   if (test !== null) {
    //     likedArray.unshift(test);
    //   }
    // }
    return (
      <div className='liked-page'>

        <Login />

        <nav className="navbar navbar-expand-md navbar-dark navbar-fixed-top bg-dark, navBackColor ">
          <div className="container">

            <a href='/' className="logo-style"><i className="fa fa-music fa-3x" style={{ margin: '5px' }}></i>
              <h2 className="filmIn logoName logo-nm-ad" style={{ marginTop: '2vh' }} >SongPro</h2></a>

            <button className="mic-btn" style={{ display: 'none' }} id="mic-btn-id" onClick={this.toggleListen}>
              <i className="fa fa-microphone" style={{ color: 'black' }} title="Activate Mic" aria-hidden="true"></i>
            </button>


            <i className="fa fa-heart fa-2x nav-like-btn" style={{ visibility: 'hidden', color: 'red', margin: '12px' }} title="Liked List" aria-hidden="true"></i>

            <form className="form-inline, searchBar myHomefont" style={{ visibility: 'hidden' }} onSubmit={this.onSubmitHandle}>
              <input className="form-control mr-sm-4 col-sm-12"
                type='search'
                onChange={e => { this.setState({ term: e.target.value }) }}
                value={this.state.term}
                placeholder='Search for songs....'
                aria-label="Search"
                list="search"
                autoComplete="on"
                autoFocus={this.state.autoFoc}
              />

            </form>

            <div id='liked6' className="myHomefont" style={{ marginLeft: '0.5%', visibility: 'hidden' }}>
              {(this.state.spin === true && this.props.spinStop === null) || (this.state.spin === true && this.props.spinStop === 'True') || (this.state.spin === true && this.props.spinStop === 'False')
                ? (<div className="clearfix">
                  <div className="spinner-border text-light float-right" role="status">
                  </div>
                </div>) : (<div className='offspin'><i style={{ color: 'white' }} className="fa fa-search fa-2x float-right" onClick={this.onSubmitHandle} aria-hidden="true"></i></div>)}
            </div>
            {userNm ? (<button type="button" className="btn btn-primary" onClick={() => {
              localStorage.removeItem('userNm');
              window.location.href = "/";
            }} title='Logout'>
              {userNm}
            </button>) : (<button type="button" className="btn btn-primary" data-toggle="modal" data-target="#loginModal">
              Login
            </button>)}          </div>

        </nav>
        <br /><br />

        <div className="container" >
          <button type="button" className="btn btn-info pull-right"
            style={{ marginTop: '13vh' }}
            onClick={() => this.setState({ allLikedList: !this.state.allLikedList })}  >{this.state.allLikedList === false ? ('Most Liked Videos') : ('Your Favorite')}</button>
          <h2 style={{ marginTop: '20vh' }}>{this.state.allLikedList === false ? ('Your favorite videos') : ('Most liked videos')}:</h2>
          <div id="inn" className="row justify-content-center" style={{ marginBottom: '15vh' }}>

            {this.state.likedList.map((like) => {
              if (this.state.allLikedList === false) {
                if (userNm === like.user) {
                  return (
                    <div id={`id-${like.data.id.videoId}`} className='like-cards' key={like._id}>
                      <div className="card-con" >
                        <i type="button" title="Remove Video" className="fa fa-trash rem-btn" onClick={() => {
                          var confirmRemove = window.confirm(`Are you sure you want to remove: "${like.data.snippet.title}"`)
                          if (confirmRemove === true) {
                            document.querySelector(`#id-${like.data.id.videoId}`).classList.add("remove-anime");
                            setTimeout(() => {

                              axios.delete(`/api/like/${like._id}`)
                                .then(res => {
                                  console.log(res.data)
                                  if(res.data.success === true){
                                    alert('Removed Successfully..!')
                                  }else alert('This video is can not be removed..!')
                                })
                                .catch(err => {
                                  if(err){
                                    window.location.reload();
                                  }
                                })

                              document.querySelector(`#id-${like.data.id.videoId}`).style.display = 'none';
                            }, 1200);
                          }
                        }}></i>
                        <p className="liked-time">{like.date}</p>
                        <img className="liked-img" alt="img" src={like.data.snippet.thumbnails.medium.url} />
                        <p className="liked-title" >{like.data.snippet.title}</p>
                        <p className="liked-des">{like.data.snippet.description}</p>
                      </div>
                      <div className="card-icon-test" onClick={(e) => {
                        this.setState({
                          selectedVid: like.data.id.videoId,
                          selVidTitle: like.data.snippet.title,
                        })
                      }} >
                        <img src={playIcon} title="Watch Video" alt="img" className="watch-btn-test" type="button" data-toggle="modal" data-target="#exampleModal" width="50px" />
                      </div>
                      {this.videoModal()}
                    </div>
                  );
                }
              } else {
                return (
                  <div id={like.data.id.videoId} className='like-cards' key={like._id}>
                    <div className="card-con" >
                      {/* <i type="button" title="Remove Video" className="fa fa-trash rem-btn"
                        onClick={() => {

                          alert("You can not Remove any videos from here")

                          // var confirmRemove = window.confirm(`Are you sure you want to remove: "${like.data.snippet.title}"`)
                          // if (confirmRemove === true) {
                          //   document.querySelector(`#${like.data.id.videoId}`).classList.add("remove-anime");
                          //   setTimeout(() => {
                          //     //Delete item
                          //     axios.delete(`/api/like/${like._id}`)
                          //       .then(res => console.log(res.data))
                          //       .catch(err => console.log(err))

                          //     document.querySelector(`#${like.data.id.videoId}`).style.display = 'none';
                          //   }, 1200);
                          // }
                        }}
                        title='You can not Remove any videos from here'></i> */}
                      <p className="liked-time">{like.date}</p>
                      <img className="liked-img" alt="img" src={like.data.snippet.thumbnails.medium.url} />
                      <p className="liked-title" >{like.data.snippet.title}</p>
                      <p className="liked-des">{like.data.snippet.description}</p>
                    </div>
                    <div className="card-icon-test" onClick={(e) => {
                      this.setState({
                        selectedVid: like.data.id.videoId,
                        selVidTitle: like.data.snippet.title,
                      })
                    }} >
                      <img src={playIcon} title="Watch Video" alt="img" className="watch-btn-test" type="button" data-toggle="modal" data-target="#exampleModal" width="50px" />
                    </div>
                    {this.videoModal()}
                  </div>
                );
              }

            })}

          </div>
        </div>
      </div >
    );
  }
}

export default FirebaseIntegrate;