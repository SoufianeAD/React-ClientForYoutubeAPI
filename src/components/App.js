import React, { useState, useEffect }  from "react";
import SearchBar from './SearchBar';
import YoutubeApi from "../api/YoutubeApi";
import VideoList from "./VideoList";
import VideoDetails from "./VideoDetails";
import useVideos from "../hooks/useVideos";

const App = () => {
    //const [videos, setVideos] = useState([]);
    const [selectedVideo, setSelectedVideo] = useState(null);
    const [videos, search] = useVideos('lghorba mok saib');
    {/*
        useEffect(() => {
            onSearchTermSubmit('matebkich bahaoui');
        }, []);


        const onSearchTermSubmit = async (searchTerm) => {
            const response = await YoutubeApi.get('/search', {
                params: {
                    q: searchTerm
                }
            });
            console.log(response.data.items);
            setVideos(response.data.items);
            setSelectedVideo(response.data.items[0]);
        }
    */}

    useEffect(() => {
        setSelectedVideo(videos[0]);
    }, [videos]);

    return (
        <div className="ui container">
            <SearchBar onFormSubmit={search} />
            <div className="ui grid">
                <div className="ui row">
                    <div className="eleven wide column">
                        <VideoDetails video={selectedVideo} />
                    </div>
                    <div className="five wide column">
                        <VideoList
                            onVideoSelect={ setSelectedVideo }
                            videos={videos}
                        />
                    </div>
                </div>
            </div>
        </div>
    );

}

export default App;