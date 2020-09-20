import React from 'react';
import axios from 'axios';

class Upload extends React.Component {

    render() {
        return (
            <div>
                <div>
                    <label id='age'>Upload Image</label>
                    <input type="file" id="image"
                        name="image" required /> 
			    </div>
                    <div>
                        <button id='submit' onClick={() => {console.log("Sanjay buddys"); 
                        let photo = document.querySelector('#image').value;
                        axios.post('/api/upload', { photo })
            .then(res => {
                console.log(res.status)
                // if (res.status === 200) {
                //     document.querySelector('.like-btn').style.display = 'none';
                //     document.querySelector('#already-liked').style.display = 'block';
                // }
            })
            .catch(err => console.log(err))} }>Submit</button>
                    </div>
                </div> 
        )
    }
}

export default Upload;