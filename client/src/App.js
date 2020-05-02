import React from 'react';
import './Modules/card.css';
import { Route, BrowserRouter } from 'react-router-dom';
import CuTube from './Cutube';
import FirebaseIntegrate from './FirebaseIntegrate';

class App extends React.Component {
  render() {
    return (
      <div id='home123'>
        <BrowserRouter>
          <div id='home'>
            <Route exact path='/' component={CuTube} />
            <Route path='/liked' component={FirebaseIntegrate} />
          </div>
        </BrowserRouter>
      </div>
    );
  }
}
export default App;