import { Typography } from '@mui/material'
import classes from '../styles/home.module.css'





export const Hero = ({ video, primary, secondary }) => {


    return <div className={classes.lpage}>
        <video src={video} autoPlay muted loop className={classes.bgvideo} />
        <div className={classes.bgoverlay}>
        </div>
        {/* <div style={{ position: 'absolute', top: 0, left: 0, width: '100%' }} >
            <Header />
        </div> */}
        <div className={classes.text}>
            <Typography variant="h3" fontWeight="bold">{primary}</Typography>
            <Typography variant="h4" fontWeight="bold">{secondary}
            </Typography>
        </div>
    </div>
}