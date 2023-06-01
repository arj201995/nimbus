import { Box, Divider } from "@mui/material"
import { AboutUs } from "../components/AboutUs"
import { Departments } from "../components/Departments"
import { Hero } from "../components/Hero"
import BgVideo from '../assets/bgvideo.mp4'

const Home = () => {
    return <div style={{ display: 'flex', flexDirection: 'column' }} >
        <Hero video={BgVideo} primary="Nimbus Superior" secondary="Excellence Delivered, Satisfication Guranteed" />
        <Box mx={2}>
            <AboutUs />
            <Divider />
            <Departments />
            <Divider />
        </Box>
    </div>
}

export default Home