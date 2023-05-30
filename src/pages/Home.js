import { Divider } from "@mui/material"
import { AboutUs } from "../components/AboutUs"
import { Departments } from "../components/Departments"
import { Hero } from "../components/Hero"
import BgVideo from '../assets/bgvideo.mp4'

const Home = () => {
    return <div style={{ display: 'flex', flexDirection: 'column' }} >
        <Hero video={BgVideo} primary="Nimbus Superior" secondary="Excellence Delivered, Satisfication Guranteed" />
        <AboutUs />
        <Divider />
        <Departments />
        <Divider />
    </div>
}

export default Home