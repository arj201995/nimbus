import { AboutUsDetails } from "../components/AboutUsDetails"
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

const AboutUsPage = () => {

    return <motion.div variants={containerVariant} initial="hidden" animate="visible">
        <AboutUsDetails />
    </motion.div>
}

export default AboutUsPage