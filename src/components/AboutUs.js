import classes from '../styles/aboutus.module.css'
import AboutUsImg from '../assets/aboutus1.webp'
import { Box, Card, CardContent, CardMedia, Typography } from '@mui/material'
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
import { StyledButton } from './styledComponents/StyledComponents';
import styled from '@emotion/styled';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Reveal } from './Reveal';

const StyledCard = styled(Card)(({ theme }) => ({
    display: 'flex', width: '90%', margin: 'auto', marginTop: '0.5rem',
    [theme.breakpoints.down("md")]: {
        flexDirection: 'column-reverse',
        alignItems: 'center',
        justifyContent: 'center',
    },
    [theme.breakpoints.down('sm')]: {
        width: '100%',
    }
}))

const StyledCardMedia = styled(CardMedia)(({ theme }) => ({
    height: '28rem',
    width: '30%',
    padding: '1rem',
    [theme.breakpoints.down("md")]: {
        height: '25rem',
        width: '40%',
        marginTop: '2rem'
    },
    [theme.breakpoints.down('sm')]: {
        width: '80%',
        fontSize: '1rem',
        marginTop: '1rem'

    }

}))


const variantButton = {
    hover: {
        scale: 1.1,
        boxShadow: '0px 0px 8px 0px black',
        textShadow: '0px 0px 8px 0px black',
        transition: {
            duration: 0.3,
            yoyo: Infinity
        }
    }
};


export const AboutUs = () => {

    const navigate = useNavigate()

    const NavigateToDetails = () => {
        navigate('/about-us')
    }

    return <div className={classes.aboutus} >
        <Reveal>

            <StyledCard elevation={6}>
                <CardContent>
                    <Box mt={6}>
                        <Typography variant="h3" align='center' className={classes.aboutus_font} >About Us</Typography>
                        <Box className={classes.aboutus_content} >
                            <Typography variant='h6' className={classes.aboutuscard_details} >
                                Welcome to MindSuperior Consult, your trusted partner in Recruitment Outsourcing. We are a dedicated team of experts who are passionate about revolutionizing the way organizations attract, engage, and retain top talent.
                            </Typography>
                            <StyledButton variant='contained' component={motion.button} variants={variantButton} whileHover="hover" endIcon={<ArrowRightAltIcon />} fullWidth size="small" sx={{ fontWeight: 'bold', marginTop: '4rem' }} onClick={NavigateToDetails} >
                                Know Us More
                            </StyledButton>
                        </Box>
                    </Box>
                </CardContent>
                <StyledCardMedia height={500} width={300} component="img" alt="about us" src={AboutUsImg} />
            </StyledCard>
        </Reveal>
        <Reveal>
            <Card className={classes.ceo}>
                <div className={classes.abouttheceo}>
                    <Typography variant="h6">
                        "You want to know the secret to why some people are so Blessed? They give. They support. They're the person who always says yes. They give their time. They give a ride. They lend a shoulder to lean on and a ear to listen. Always there for other people's problems. Always giving encouragement. Would give the clothes off their back and their last dollar. Teach people the proper ways to making money. Get them jobs. Forgive debts. Be loyal! And the list goes on...

                        See, you don't know how other folks entertain strangers unaware and do good deeds for their families and friends. You don't know the good hearts of the people who get judged but GOD does and he rewards them openly. So, when you see the person beside you prosper just know that’s the RIGHTEOUS GOD!!!

                        To the people who have good hearts and you seem to go unnoticed, done wrong, misjudged, used & abused.

                        GOD ALWAYS GOT YOU!!"
                    </Typography>
                    <Box sx={{ display: 'flex', flexDirection: 'column', marginTop: '0.5rem' }} >
                        <Typography variant="h5" fontWeight="bold" align="center">
                            Founder CEO
                        </Typography>
                        <Typography variant="h5" fontWeight="bold" align='center'>
                            Rahul (Jesse) Dinkar
                        </Typography>
                    </Box>
                </div>
            </Card>
        </Reveal>

    </div>
}