import React from 'react';

class Helper extends React.Component {
  render() {
    return (
      <div className='footer navbar-fixed-bottom'>
      <div data-toggle="modal" className='offspin' data-target="#exampleModalCenter" style={{ marginLeft: '1%',marginBottom:'-2%' , color: 'skyblue' }}>
          <i className="fa fa-copyright fa-1x" aria-hidden="true" title="click me for developer info!"></i>
        </div>
      <div style={{ textAlign: 'center', color: '#9CE9A4' }}>
        
        <a href="https://www.instagram.com/sanjaykhtal/" target="_blank" rel="noopener noreferrer" style={{ marginRight: '8px' }}>
          <i className="fa fa-instagram fa-3x" aria-hidden="true" title='Instagram'></i>
        </a>
        <a href="https://github.com/appsyk" target="_blank" rel="noopener noreferrer" style={{ marginRight: '8px' }}>
          <i className="fa fa-git-square fa-3x" aria-hidden="true" title='Github'></i>
        </a>
        <a href="https://www.facebook.com/sanjay.khatal.562" target="_blank" rel="noopener noreferrer" style={{ marginRight: '8px' }}>
          <i className="fa fa-facebook-square fa-3x" aria-hidden="true" title='Facebook'></i>
        </a>

        {/* <i className='fa fa-user-circle' aria-hidden="true"></i> */}
        {/* <button type="button" className='fa fa-user-circle fa-3x' data-toggle="modal" data-target="#exampleModal"> */}

        {/* </button> */}

        </div>
      </div>
    );
  }
}

export default Helper;