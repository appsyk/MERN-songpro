import './LoadStyle.css';
import React from 'react';

const Spinner = () => {
	return (
		<div className="container">
        <div className="row">
            <div className="col-md-12">
                <div className="loader10">
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
            </div>
        </div>
    </div>
		// <div className="ui active dimmer" >
		// 	<div className="ui text loader" >
		// 	<h1>Loading...</h1>
		// 	</div>
		// </div>
	);
};

Spinner.defaultProps = {
	message:"Loading . . ."
}

export default Spinner;