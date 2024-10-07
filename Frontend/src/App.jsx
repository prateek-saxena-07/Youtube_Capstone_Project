import VideoGrid from "./components/VideoGrid";
import Header from "./components/Header";
import VideoFilter from "./components/VideoFilter";
import { Grid,GridItem } from "@chakra-ui/react";
import Sidebar from "./components/Sidebar";
import { useState,useEffect} from "react";
import { useSelector, useDispatch } from "react-redux";
import { setVideos } from "./utils/homeVideosSlice";


const App = () => {
    const [bars, setBars] = useState(false);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);
    const dispatch = useDispatch();
    const videos = useSelector((state) => state.homeVideosGrid.videoData)
  
    useEffect(() => {
        const fetchVideos = async () => {
            
            try {
                const response = await fetch('http://localhost:5100/api/v1/temp/getVideos');
                const data = await response.json();
                console.log(data.data);
              dispatch(setVideos(data.data));
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
    
    <Grid
  templateAreas={`"header header"
                  "sidebar filter"
                  "sidebar grid"`}
  gridTemplateRows={'51px 40px'}
  gridTemplateColumns={'70px 3fr'}
  h='200px'
  gap='1'
  color='blackAlpha.700'
  fontWeight='bold'
>
  <GridItem pl={2} area={'header'}>
        <Header />
  </GridItem>
      <GridItem pl='2'area={'sidebar'} pt={4} mt={0}>
        <Sidebar/>
  </GridItem>
  <GridItem pl='0'  area={'filter'}>
    <VideoFilter/>
  </GridItem>
  <GridItem pl='0'  area={'grid'}>
        <VideoGrid videos={videos} />
  </GridItem>
    </Grid>

    </>)
      
}

export default App;