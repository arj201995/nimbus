import { Career } from "../components/Career"
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
const CareerPage = () => {
    return <motion.div variants={containerVariant} initial="hidden" animate="visible">
        <Career />
    </motion.div>
}

export default CareerPage