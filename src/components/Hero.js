import { Typography, Slide } from '@mui/material'
import classes from '../styles/home.module.css'





export const Hero = ({ video, primary, secondary }) => {


    return <div className={classes.lpage}>
        <video src={video} autoPlay muted loop className={classes.bgvideo} />
        <div className={classes.bgoverlay}>
            <Slide direction="down" in={true} timeout={800} mountOnEnter unmountOnExit>
                <div className={classes.text}>
                    <Typography variant="h3" fontWeight="bold">{primary}</Typography>
                    <Typography variant="h4" fontWeight="bold">{secondary}
                    </Typography>
                </div>
            </Slide>
        </div>
    </div>
}