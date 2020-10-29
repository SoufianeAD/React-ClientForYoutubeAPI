import Axios from 'axios';

const KEY = 'AIzaSyB4Q9oU0uBCeKTlfU7ZJN5I8bn0ZeD3tWQ';


export default Axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        maxResult: 5,
        key: KEY
    }
});