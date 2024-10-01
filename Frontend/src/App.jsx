import VideoGrid from "./components/VideoGrid";
import Header from "./components/Header";
import VideoFilter from "./components/VideoFilter";
import { Grid,GridItem } from "@chakra-ui/react";
import Sidebar from "./components/Sidebar";
import { useState } from "react";


const App = () => {
  const [bars, setBars] = useState(false);
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
    <VideoGrid/>
  </GridItem>
    </Grid>

    </>)
      
}

export default App;