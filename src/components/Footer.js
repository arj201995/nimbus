import { Box, Grid, Typography } from "@mui/material"
import Logo from '../assets/logo.webp'
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

import classes from '../styles/footer.module.css'
import { routes } from "../utils/routes";
import { Link } from "react-router-dom";

export const Footer = () => {
    return <Grid container className={classes.footer} >
        <Grid lg={4} md={4} xs={12} sm={12} container item justifyContent="center" alignItems="center" paddingBottom="0.5rem" direction="column">
            <img src={Logo} alt="logo" className={classes.footer__logo} />
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: '1rem' }} >
                <Box sx={{ display: 'flex', gap: '0.4rem' }}>

                    <PhoneIcon sx={{ fontSize: '2rem' }} />
                    <Box sx={{ flex: 1, display: 'flex', flexDirection: 'column' }} >
                        <Typography variant="h7" component="a" href="tel:+1 (214) 613-8150" className={classes.link}>
                            +1 (214) 613-8150
                        </Typography>
                        <Typography variant="h7" component="a" href="tel:+1 (218) 321-8481" className={classes.link}>
                            +1 (218) 321-8481
                        </Typography>
                    </Box>
                </Box>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }} >
                    <EmailIcon />
                    <Typography variant="h7" component="a" href="mailTo:info@nimbussuperior.com" className={classes.link}>
                        info@nimbussuperior.com
                    </Typography>
                </Box>
            </Box>

        </Grid>
        <Grid item container lg={4} md={4} sm={12} xs={12} direction="column" justifyContent="flex-start" alignItems="center" paddingBottom="2rem" sx={{ backgroundColor: '#8a8986' }} >
            <Typography variant="h6" my={5}>Quick Links</Typography>
            {
                routes.map((route, index) => <Typography key={`${route.name}+${index}`} variant="h7" component={Link} className={classes.link} to={`${route.link}`} sx={{ lineHeight: '1.6rem' }}>
                    {route.name}
                </Typography>)
            }
        </Grid>
        <Grid item container lg={4} md={4} sm={12} xs={12} justifyContent="center" alignItems="center" paddingBottom="0.5rem" sx={{ padding: { xs: '1rem 2rem', sm: '0rem' }, height: { xs: '10rem', sm: 'inherit' } }} >
            <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '0.5rem' }}>
                <Typography component="a" href="https://linkedin.com/" className={classes.link} >
                    <LinkedInIcon />
                </Typography>
                <Typography variant="h7">
                    Join our community or say hello.
                </Typography>
            </Box>
            <Typography variant="h7" sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', }} >
                Copyright © 2022-23. All rights reserved.
                <Box component="span" sx={{ textDecoration: 'underline' }} >
                    Nimbus Superior
                </Box>
            </Typography>
        </Grid>
    </Grid >
}