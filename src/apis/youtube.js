import axios from 'axios';

const KEY = 'AIzaSyDdlt4XLzdLuAP1vwx3gg3U7Z-qP3Qtr2o';

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3/',
    params: {
        part: 'snippet', 
        maxResults: 5, 
        key: KEY,
        type: 'video'
    } 
});
