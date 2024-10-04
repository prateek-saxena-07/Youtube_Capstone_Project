import { SimpleGrid } from "@chakra-ui/react";
import VideoCard from './VideoCard.jsx';
import { setVideos } from "../utils/homeVideosSlice.js";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch,useSelector } from "react-redux";

const VideoGrid = () => {
    // const videos = useSelector((state) => state.homeVideosGrid.videoData)
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);
    const dispatch = useDispatch();
    const videos=useSelector((state)=>state.homeVideosGrid.videoData)
    useEffect(() => {
        const fetchVideos = async () => {
            
            try {
                const response = await fetch('http://localhost:5100/api/v1/temp/getVideo');
                const data = await response.json();
                console.log(data);
                dispatch(setVideos(data))
            }
            catch (err) {
                setError(err.message || 'failed to fetch Videos')
            }
            finally {
                setLoading(false);
            }

        };
        fetchVideos();
    }, [dispatch]);

     if (loading) {
        return <div>Loading...</div>; 
    }

    if (error) {
        return <div>Error: {error}</div>; 
    }

    return (<>
        <SimpleGrid minChildWidth='250px' spacing='10px' m={6}>
            {videos.data.map((video) => (<Link to={`/video/${video._id}`}>
                <VideoCard props={video} key={video.id}></VideoCard>
            </Link>))}
        </SimpleGrid>
    </>)
}

export default VideoGrid;

