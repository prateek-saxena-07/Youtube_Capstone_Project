import VideoGrid from "./components/VideoGrid";
import Header from "./components/Header";
import VideoFilter from "./components/VideoFilter";
import { Grid, GridItem } from "@chakra-ui/react";
import Sidebar from "./components/Sidebar";
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setVideos } from "./utils/homeVideosSlice";

const App = () => {
    const [bars, setBars] = useState(false);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);
    const [searchTerm, setSearchTerm] = useState(""); // State for search term
    const dispatch = useDispatch();
    const videos = useSelector((state) => state.homeVideosGrid.videoData);
    console.log(videos);
    const SearchedItems = videos.filter((item) =>
        item.title.toLowerCase().includes(searchTerm.toLowerCase())
    );
    useEffect(() => {
        const fetchVideos = async () => {
            try {
                const response = await fetch('http://localhost:5100/api/v1/temp/getVideos');
                const data = await response.json();
                console.log(data.data);
                dispatch(setVideos(data.data));
            } catch (err) {
                setError(err.message || 'failed to fetch Videos');
            } finally {
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
  console.log(searchTerm);

    return (
        <>
            <Header searchTerm={searchTerm} setSearchTerm={setSearchTerm} /> 
            <Grid
                templateAreas={`
                    "sidebar filter"
                    "sidebar grid"`}
                gridTemplateRows={'51px 40px'}
                gridTemplateColumns={'70px 3fr'}
                h='200px'
                gap='1'
                color='blackAlpha.700'
                fontWeight='bold'
            >
                {/* <GridItem pl={2} area={'header'}>
                    <Header searchTerm={searchTerm} setSearchTerm={setSearchTerm} /> 
                </GridItem> */}
                <GridItem pl='2' area={'sidebar'} pt={4} mt={0}>
                    <Sidebar />
                </GridItem>
                <GridItem pl='0' area={'filter'}>
                    <VideoFilter />
                </GridItem>
                <GridItem pl='0' area={'grid'}>
                    <VideoGrid videos={SearchedItems} />
                </GridItem>
            </Grid>
        </>
    );
}

export default App;
