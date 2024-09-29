import VideoGrid from "./VideoGrid";
import Header from "./Header";
import VideoFilter from "./VideoFilter";
import { Grid,GridItem } from "@chakra-ui/react";
import Sidebar from "./Sidebar";
import { useState } from "react";


const App = () => {
  const [bars, setBars] = useState(false);
  return (<>
    {bars?<Grid
  templateAreas={`"header header"
                  "sidebar filter"
                  "sidebar grid"`}
  gridTemplateRows={'51px 40px'}
  gridTemplateColumns={'120px 3fr'}
  h='200px'
  gap='1'
  color='blackAlpha.700'
  fontWeight='bold'
>
  <GridItem pl={2} area={'header'}>
        <Header bars={bars} setBars={setBars} />
  </GridItem>
  <GridItem pl='2' area={'sidebar'}>
        <Sidebar bars={bars} />
  </GridItem>
  <GridItem pl='2'  area={'filter'}>
    <VideoFilter/>
  </GridItem>
  <GridItem pl='2'  area={'grid'}>
    <VideoGrid/>
  </GridItem>
    </Grid>
      :
      <Grid
  templateAreas={`"header header"
                  "sidebar filter"
                  "sidebar grid"`}
  gridTemplateRows={'51px 40px'}
  gridTemplateColumns={'60px 3fr'}
  h='200px'
  gap='1'
  color='blackAlpha.700'
  fontWeight='bold'
>
  <GridItem pl={2} bg='orange.300' area={'header'}>
        <Header bars={bars} setBars={setBars} />
  </GridItem>
  <GridItem pl='2' bg='pink.300' area={'sidebar'}>
        <Sidebar bars={bars} />
  </GridItem>
  <GridItem pl='2' bg='green.300' area={'filter'}>
    <VideoFilter/>
  </GridItem>
  <GridItem pl='2' bg="blue" area={'grid'}>
    <VideoGrid/>
  </GridItem>
</Grid>}
  </>)
}

export default App;