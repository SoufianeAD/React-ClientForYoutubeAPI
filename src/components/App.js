import React, { useState, useEffect }  from "react";
import SearchBar from './SearchBar';
import VideoList from "./VideoList";
import VideoDetails from "./VideoDetails";
import useVideos from "../hooks/useVideos";

const App = () => {
    //const [videos, setVideos] = useState([]);
    const [selectedVideo, setSelectedVideo] = useState(null);
    const [videos, search] = useVideos('lghorba mok saib');

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