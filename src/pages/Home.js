import { Box, Divider } from "@mui/material"
import { AboutUs } from "../components/AboutUs"
import { Departments } from "../components/Departments"
import { Hero } from "../components/Hero"
import BgVideo from '../assets/bgvideo.mp4'
import { motion } from 'framer-motion'

const containerVariant = {
    hidden: { opacity: 0, },
    visible: {
        opacity: 1, transition: {
            type: 'spring', delay: 0.5,
        }
    },
    exit: {
        opacity: 0, transition: {
            ease: 'easeInOut'
        }
    }

}

const Home = () => {
    return <motion.div style={{ display: 'flex', flexDirection: 'column' }} variants={containerVariant} initial="hidden" animate="visible" >

            <Hero video={BgVideo} primary="Nimbus Superior" secondary="Excellence Delivered, Satisfication Guranteed" />
            <Box mx={2}>
                <AboutUs />
                <Divider />
                <Departments />
                <Divider />
            </Box>
    </motion.div>
}

export default Home