import React from 'react';
import axios from 'axios';

class Login extends React.Component {

    state = {
        email: '',
        password: '',
        loggedIn: ''
    }

    onInputChange = (e) => {
        this.setState({
            [e.target.name]: [e.target.value]
        })

    }

    onRegisterHandle = () => {
        const { email, password } = this.state;
        
        axios.post('/api/user', { email, password })
            .then(res => {
                if (res.data === 11000) {
                    alert('this user already exists.')
                } else {
                    alert('User registered successfully...');
                    localStorage.setItem('userNm', email[0])
                        var user = localStorage.getItem('userNm');
                        var msg = new SpeechSynthesisUtterance(`Hello${user}........Welcome in Song Pro...Now click on the Mic and tell me what you want to watch today`);
                          msg.volume = 1;
                          msg.rate = 1;
                          msg.pitch = 0.8;
                          msg.lang = 'en-US';
                          window.speechSynthesis.speak(msg);
                          setTimeout(() => {
                            window.location.reload();
                          }, 1000);
                }
                // ,
                // this.setState({
                //     loggedIn: true
                // })
            })
            .catch(err => alert('Error: ', err))
    }

    onLoginHandle = () => {
        const { email, password } = this.state;

        axios.get('/api/user')
            .then(res => {
                res.data.map(user => {
                    if (email[0] === user.email && password[0] === user.password) {
                        this.setState({
                            loggedIn: email[0]
                        })
                        localStorage.setItem('userNm', email[0])
                        var user1 = localStorage.getItem('userNm');
                        var msg = new SpeechSynthesisUtterance(`Hello${user1}........Welcome in Song Pro...Now click on the Mic and tell me what you want to watch today`);
                          msg.volume = 1;
                          msg.rate = 1;
                          msg.pitch = 0.8;
                          msg.lang = 'en-US';
                          window.speechSynthesis.speak(msg);
                          setTimeout(() => {
                            window.location.reload();
                          }, 1000);
                    }
                })
            })
            .catch(err => alert('Error: ', err));
    }

    render() {
        return (
            <div>
                <div className="modal fade" id="loginModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div className="modal-dialog" role="document">
                        <div className="modal-content">
                            {/* <div className="modal-header">
                                <h5 className="modal-title" id="exampleModalLabel">Modal title</h5>
                                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                </button>
                            </div> */}
                            <div className="modal-body">
                                <form onSubmit={this.onSubmitHandle}>
                                    <div className="form-group row">
                                        <label htmlFor="staticEmail" className="col-sm-2 col-form-label">Username<span className='requiSymbol'><sup>*</sup></span></label>
                                        <div className="col-sm-10">
                                            <input type="text" className="form-control" onChange={this.onInputChange} name='email' placeholder='Enter your name' />
                                        </div>
                                    </div>
                                    <div className="form-group row">
                                        <label htmlFor="inputPassword" className="col-sm-2 col-form-label">Password<span className='requiSymbol'><sup>*</sup></span></label>
                                        <div className="col-sm-10">
                                            <input type="password" className="form-control" onChange={this.onInputChange} name='password' placeholder="Password" />
                                        </div>
                                    </div>
                                </form>
                            </div>
                            <div className="modal-footer">
                                {/* <button type="button" className="btn btn-secondary" data-dismiss="modal">Register</button> */}
                                <button type="submit" onClick={this.onRegisterHandle} className="btn btn-secondary" >Register</button>
                                <button type="submit" onClick={this.onLoginHandle} className="btn btn-primary" >Login</button>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Login;