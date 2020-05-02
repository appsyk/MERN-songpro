import axios from 'axios';

// const KEY = 'AIzaSyB0NeKjCw7imbEVcBXGipd_g1n4PU6XRqc';
// const KEY = 'AIzaSyDoVe2__Is0yIvmZ_B3CBxpHhgXi2SpUMg';
// const KEY = 'AIzaSyAL9jCDWvRD2G5nUgBrLEgEhZTQsRvzt80';
const KEY = 'AIzaSyBe3b-kF4PCRfopa9X0Z932_lfyAkRpjUo';

export default axios.create({
    baseURL:'https://www.googleapis.com/youtube/v3',
    params:{
        part:'snippet',
        maxResults: 30,
        key: KEY
    }
})
