import React from 'react';
import { Link } from 'react-router-dom';
import Login from './components/Login';

const retreiveUser = localStorage.getItem('userNm')

const SpeechRecognition = window.webkitSpeechRecognition;
const recognition = new SpeechRecognition()


recognition.continous = true
recognition.interimResults = true
// recognition.lang = 'en-US'
// SpeechRecognition.continous = true


//------------------------COMPONENT-----------------------------


class SearchBar extends React.Component {

  state = {
    term: '',
    spin: false,
    spn: false,
    listening: false,
    autoFoc: false,
    IsOnline: true
  };


  //-----------------------------------------------------------------


  getUserInfo() {

    if (!retreiveUser) {

      var msg = new SpeechSynthesisUtterance('Song Pro wants to know you');
      msg.volume = 1;
      msg.rate = 1;
      msg.pitch = 0.8;
      msg.lang = 'en-US';
      window.speechSynthesis.speak(msg);

      // var IniVal ='a'
      // //  prompt("SongPro want to know your name : ", "your name here...");

      // if (IniVal) {
      //   var userVal = IniVal.toLocaleLowerCase();
      //   console.log(userVal)
      //   localStorage.setItem('userNm', `${userVal}`)
      //   var msg = new SpeechSynthesisUtterance(`Hello.....${userVal}
      //   ........Welcome in ..... Song Pro ...............................
      //   Now click on the Mic .... and tell me what you want to watch today`);
      //   msg.volume = 1;
      //   msg.rate = 1;
      //   msg.pitch = 0.8;
      //   msg.lang = 'en-US';
      //   window.speechSynthesis.speak(msg);
      //   setTimeout(() => {
      //     window.location.reload();
      //   }, 2000);

      // } else {
      //   console.log('user not filled their name.')
      //   // let notify = new Notification('user not filled their name.')
      // }
    }
  }

  checkUser() {
    var msg = new SpeechSynthesisUtterance(`Hello.....${retreiveUser}
      Welcome again...............................
      Now click on the Mic........ and tell me what you want to watch..... today.`);
    msg.volume = 1;
    msg.rate = 1;
    msg.pitch = 0.8;
    msg.lang = 'en-UK';
    window.speechSynthesis.speak(msg);
  }

  toggleListen = () => {
    this.setState({
      listening: !this.state.listening
    }, this.handleListen)
    setInterval(() => {
      this.setState({
        listening: false
      }, this.handleListen)
    }, 20000);
  }

  handleListen = () => {

    console.log('listening?', this.state.listening)

    if (this.state.listening) {
      recognition.start()
      recognition.onend = () => {
        console.log("...continue listening...")
        recognition.start()
      }

    } else {
      recognition.stop()
      recognition.onend = () => {
        console.log("Stopped listening per click")
      }
    }

    recognition.onstart = () => {
      console.log("Listening!")
    }

    let finalTranscript = ''
    recognition.onresult = event => {
      let interimTranscript = '';

      for (let i = event.resultIndex; i < event.results.length; i++) {
        const transcript = event.results[i][0].transcript;
        if (event.results[i].isFinal) finalTranscript += transcript + ' ';
        else interimTranscript += transcript;
      }

      // var moodArray = [

      //   // positive

      //   'amused', 'blissful', 'calm', 'cheerful', 'content', 'dreamy', 'ecstatic', 'energetic', 'excited', 'flirty', 'giddy', 'good', 'happy', 'joyful', 'loving', 'mellow', 'optimistic', 'peaceful', 'silly', 'sympathetic',

      //   // negative

      //   'angry', 'annoyed', 'apathetic', 'bad', 'cranky', 'depressed', 'envious', 'frustrated', 'gloomy', 'grumpy', 'guilty', 'indifferent', 'irritated', 'melancholy', 'pessimistic', 'rejected', 'restless', 'sad', 'stressed', 'weird'

      // ];
      //for any search on youtube---------------------------------------------
      this.setState({
        term: finalTranscript,
      });

      //for only emotions search----------------------------------------------
      // for (let mod = 0; mod < moodArray.length; mod++) {

      //   if ((interimTranscript === moodArray[mod]) || interimTranscript === `feeling ${moodArray[mod]}`) {

      //     console.log(12345, interimTranscript, '---', moodArray[mod])
      //     console.log('Final Text', finalTranscript, "-----", interimTranscript)

      //     this.setState({
      //       term: interimTranscript,
      //     })
      //   }
      // }

      //-------------------------COMMANDS------------------------------------

      const transcriptArr = finalTranscript.split(' ')
      const stopCmd = transcriptArr.slice(-3, -1)
      console.log('stopCmd', stopCmd)

      if (stopCmd[0] === 'stop' && stopCmd[1] === 'listening') {
        recognition.stop()
        recognition.onend = () => {
          // let notify = new Notification("Stopped listening per command");
          console.log('Stopped listening per command')
          const finalText = transcriptArr.slice(0, -3).join(' ')
          document.getElementById('final').innerHTML = finalText
          // return { notify }
        }
      }
    }

    //-----------------------------------------------------------------------

    recognition.onerror = event => {
      // let notify = new Notification("Error occurred in recognition: " + event.error)
      console.log("Error occurred in recognition: " + event.error)
      // return { notify }
    }

  }
  //------------------------------------------------------------------
  onSubmitHandle = (event) => {
    event.preventDefault();
    this.setState({ spin: true, spn: !this.state.spn });

    this.props.onFormSubmitProp(this.state.term);
    setTimeout(() => {
      document.querySelector('.mic-style').style.display = 'none';
      document.querySelector('.mic-btn').style.cssText = "display: 'block'; transition: 1s ease-out";
    }, 1000);
    if (!navigator.onLine) {
      let notify = alert("Your Device is not connected to internet.");
      return notify;
    }

  }

  componentDidMount() {
    this.intervalID = setInterval(
      () => {
        this.spinner();
      }, 1000);

    // this.intervalID_focus = setInterval(
    //   () => {
    //     // this.spinner();
    //     if (this.state.term !== null) {
    //       console.log(112233,'first')
    //       document.querySelector('#search-id').focus();
    //     }else if( this.state.spinStop === 'True'|| this.props.spinStop === 'False' ){
    //       console.log(112233,'second')
    //       document.querySelector('#search-id').blur();
    //     }
    //     else{
    //       console.log(112233,'third')
    //       document.querySelector('#search-id').focus();
    //     }
    // },
    //   1000
    // );
  }
  componentWillUnmount() {
    clearInterval(this.intervalID);
  }
  spinner() {
    if (this.props.spinStop === 'True' || this.props.spinStop === 'False') {
      this.setState({
        spin: false
      });
    }
  }

  // micLogo() {
  //   const micStyle = {
  //     list
  //   }
  //   return (
  //     <div onClick={this.toggleListen}>
  //       <span className="intro-banner-vdo-play-btn pinkBg" target="_blank">
  //         <i className="fa fa-microphone" style={{ color: 'black' }} aria-hidden="true"></i>
  //         <span className="ripple pinkBg"></span>
  //         <span className="ripple pinkBg"></span>
  //         <span className="ripple pinkBg"></span>
  //       </span>
  //     </div>
  //   );
  // }



  userVoice = (retreiveUser) => {
    if (retreiveUser) {
      console.log('user voice', retreiveUser)
      return <div>{this.checkUser()}</div>;
    } else {
      console.log('user get', retreiveUser)
      return <div>{this.getUserInfo()}</div>;
    }
  }


  // componentDidUpdate(nextProps, nextState) {
  //   if( this.state.spinStop === 'True'|| this.props.spinStop === 'False' ){
  //     clearInterval(this.intervalID_focus);
  //     document.querySelector('#search-id').blur();
  //     console.log('shgcs dhvd sdjgvd sdjvd jhv')
  //   }
  // }
  //   console.log('---testing for should update----------',nextProps, nextState.term)
  //   if (nextState.term !== null) {
  //     console.log(112233,'first')
  //     document.querySelector('#search-id').focus();
  //   }else if( nextProps.spinStop === 'True'|| nextProps.spinStop === 'False' ){
  //     console.log(112233,'second')
  //     document.querySelector('#search-id').blur();
  //   }
  //   else{
  //     console.log(112233,'third')
  //     document.querySelector('#search-id').focus();
  //   }
  // }

  render(props) {

    return (

      <div>
        <Login />
        <div id='voice-id'>
          {/* {this.getUserInfo()} */}
          {/* {this.userVoice()} */}
        </div>
        <nav className="navbar navbar-expand-md navbar-dark navbar-fixed-top bg-dark, navBackColor ">
          <div className="container">
            <a href='/' className="logo-style"><i className="fa fa-music fa-3x" style={{ margin: '5px' }}></i>
              <h2 className="filmIn logoName logo-nm-ad" style={{ marginTop: '2vh' }} >SongPro</h2></a>

            <button className="mic-btn"
              style={{ display: 'none' }}
              id="" onClick={this.toggleListen}>
              {this.state.listening === false ?
                (<i className="fa fa-microphone-slash" style={{ color: 'black' }} title="Mic On" aria-hidden="true"></i>)
                : (<i className="fa fa-microphone" style={{ color: 'red' }} title="Mic Off" aria-hidden="true"></i>)}
            </button>
            {retreiveUser ? (<Link to='/liked' >
              <i className="fa fa-heart fa-2x nav-like-btn" title="Liked List" aria-hidden="true"></i>
            </Link>):(<Link to='/liked' style={{ display: 'none' }} >
              <i className="fa fa-heart fa-2x nav-like-btn" title="Liked List" aria-hidden="true"></i>
            </Link>)}
            

            <form className="form-inline, searchBar myHomefont" onSubmit={this.onSubmitHandle}>
              <input className="form-control mr-sm-4 col-sm-12"
                type='search'
                onChange={e => { this.setState({ term: e.target.value }) }}
                value={this.state.term}
                placeholder='Search for songs....'
                aria-label="Search"
                list="search"
                autoComplete="on"
                autoFocus={false}
                id='search-id'
              />

            </form>

            <div className="myHomefont" style={{ marginLeft: '0.5%' }}>
              {(this.state.spin === true && this.props.spinStop === null) || (this.state.spin === true && this.props.spinStop === 'True') || (this.state.spin === true && this.props.spinStop === 'False')
                ? (<div className="clearfix">
                  <div className="spinner-border text-light float-right" role="status">
                  </div>
                </div>) : (<div className='offspin'><i style={{ color: 'white' }} className="fa fa-search fa-2x float-right" disabled onClick={this.onSubmitHandle} aria-hidden="true"></i></div>)}
            </div>
            {/* <h4 className="username-style" title='Logout' type='button' onClick={() => { localStorage.removeItem('userNm'); window.location.reload(); }}>{retreiveUser}</h4> */}
            {/* Login modal */}
            { retreiveUser? (<button type="button" className="btn btn-primary btn-mar" onClick={() => { localStorage.removeItem('userNm'); window.location.reload(); }} title='Logout'>
              {retreiveUser}
            </button>) : (<button type="button" className="btn btn-primary btn-mar" data-toggle="modal" data-target="#loginModal">
              Login
            </button>) }
          </div>

        </nav><br /><br />
        <div className="mic-style">
          {/* {this.micLogo()} */}
          <div id='mic-clicked' onClick={this.toggleListen}>
            {this.state.listening === false ? (<span className="intro-banner-vdo-play-btn blueBg" target="_blank">
              <i className="fa fa-microphone-slash" style={{ color: '#53251f' }} aria-hidden="true"></i>
              <span className="ripple blueBg"></span>
              <span className="ripple blueBg"></span>
              <span className="ripple blueBg"></span>
            </span>) : (<span className="intro-banner-vdo-play-btn pinkBg" target="_blank">
              <i className="fa fa-microphone" style={{ color: 'black' }} aria-hidden="true"></i>
              <span className="ripple pinkBg"></span>
              <span className="ripple pinkBg"></span>
              <span className="ripple pinkBg"></span>
            </span>)}

          </div>
        </div>
      </div>
    );
  }
}

export default SearchBar;


