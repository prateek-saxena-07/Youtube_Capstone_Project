import { Button, ButtonGroup } from "@chakra-ui/react";

const VideoFilter = ({setFilter}) => {

    return (<>
        <ButtonGroup pl={6}>
            <Button onClick={(e)=>setFilter(e.target.textContent)}>All</Button>
            
            <Button onClick={(e)=>setFilter(e.target.textContent)}>Podcast</Button>
            <Button onClick={(e)=>setFilter(e.target.textContent)}>Music</Button>
            <Button onClick={(e)=>setFilter(e.target.textContent)}>News</Button>
            <Button onClick={(e)=>setFilter(e.target.textContent)}>Satire</Button>
            <Button onClick={(e)=>setFilter(e.target.textContent)}>Gaming</Button>
            <Button onClick={(e)=>setFilter(e.target.textContent)}>Dad Jokes</Button>
            <Button onClick={(e)=>setFilter(e.target.textContent)}>Live</Button>
        </ButtonGroup>
    </>)
}

export default VideoFilter;