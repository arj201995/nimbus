import { Typography, Slide } from '@mui/material'
import classes from '../styles/home.module.css'
import Poster from '../assets/poster.webp'

const Video = props => {
    // const [isVideoLoaded, setIsVideoLoaded] = useState(false);
    // const onLoadedData = () => {
    //     setIsVideoLoaded(true);
    // };

    const getVideoSrc = width => {
        if (width >= 1080) return props.video;
        if (width >= 720) return props.video;
        return props.video;
    };
    const src = getVideoSrc(window.innerWidth);

    return (
        <>
            <video
                poster={Poster}
                autoPlay
                playsInline
                muted
                src={src}
                className={props.styleName}
            // onLoadedData={onLoadedData}
            />
        </>
    );
};

export const Hero = ({ video, primary, secondary }) => {


    return <div className={classes.lpage}>
        {/* <video src={video} preload="none" poster={Poster} autoPlay muted loop playsInline className={classes.bgvideo} /> */}
        <Video video={video} styleName={classes.bgvideo} />
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