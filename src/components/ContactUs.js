import { Box, Container, Grid, Typography } from "@mui/material"
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import { ContactForm } from './ContactForm'

import classes from '../styles/contactus.module.css'




export const ContactUs = () => {

    return <Container>
        <Grid container my={6} sx={{ height: '75vh' }} >
            <Grid item container lg={6}>
                <Box sx={{ display: 'flex', flexDirection: 'column', gap: '1rem', alignItems: { xs: 'center', sm: 'center' }, justifyContent: 'center' }} >
                    <Box sx={{ display: 'flex', gap: '0.4rem' }}>

                        <PhoneIcon sx={{ fontSize: '4rem' }} />
                        <Box sx={{ flex: 1, display: 'flex', flexDirection: 'column' }} >
                            <Typography variant="h5" fontWeight="bold" component="a" href="tel:+1 (214) 613-8150" className={classes.link}>
                                +1 (214) 613-8150
                            </Typography>
                            <Typography variant="h5" fontWeight="bold" component="a" href="tel:+1 (218) 321-8481" className={classes.link}>
                                +1 (218) 321-8481
                            </Typography>
                        </Box>
                    </Box>
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }} >
                        <EmailIcon />
                        <Typography variant="h5" fontWeight="bold" component="a" href="mailTo:info@mindsuperiorconsult.com" className={classes.link}>
                            info@mindsuperiorconsult.com
                        </Typography>
                    </Box>
                </Box>

            </Grid>
            <Grid item lg={5}>
                <Typography variant="h3" align="center" my={4} className={classes.heading}>Contact Us</Typography>
                <ContactForm button="send" />
            </Grid>
        </Grid>
    </Container>
}