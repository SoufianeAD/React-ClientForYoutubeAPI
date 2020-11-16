import { useState, useEffect } from 'react';
import YoutubeApi from "../api/YoutubeApi";

const useVideos = (defaultSearchTerm) => {
    const [videos, setVideos] = useState([]);

    useEffect(() => {
        search(defaultSearchTerm);
    }, [defaultSearchTerm]);

    const search = async (searchTerm) => {
        const response = await YoutubeApi.get('/search', {
            params: {
                q: searchTerm
            }
        });
        console.log(response.data.items);
        setVideos(response.data.items);
    }

    return [videos, search];
}

export default useVideos;