import { Hero } from "./Hero"
import Careers from '../assets/careers.mp4'
import { Card, CardContent, CardMedia, Container, Grid, Typography } from "@mui/material"
import Recruiters from '../assets/recruiters1.webp'
import EmailMarketing from '../assets/emailmarketing.webp'
import { ContactForm } from "./ContactForm"
import { Reveal } from "./Reveal"

export const Career = () => {
    return <div>
        <Hero video={Careers} primary="Come, Join Our Team." />
        <Container>
            <Reveal>
                <Grid container mt={4} mb={1} >
                    <Grid item xs={12} sm={12} md={4} lg={4} sx={{ margin: { sm: 'auto', xs: '2rem' }, display: 'flex', flexDirection: 'column', gap: '1rem' }} >
                        <Grid item sx={{ maxWidth: 300 }}>
                            <Typography variant="h5" align="center" fontFamily='Titan One' >Openings</Typography>
                        </Grid>
                        <Card sx={{ maxWidth: 300 }}>
                            <CardMedia sx={{ height: 240 }} component="img" alt="Recruiters" src={Recruiters} />
                            <CardContent>
                                <Typography variant="h6" align="center" fontWeight="bold" >Recruiters</Typography>
                            </CardContent>
                        </Card>
                        <Card sx={{ maxWidth: 300 }}>
                            <CardMedia sx={{ height: 240 }} component="img" alt="Recruiters" src={EmailMarketing} />
                            <CardContent>
                                <Typography variant="h6" align="center" fontWeight="bold">Email Marketing</Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                    <Grid item xs={12} sm={12} md={8} lg={8} sx={{ margin: '1rem 0rem', display: 'flex', flexDirection: 'column', gap: '1rem', justifyContent: 'flex-start', padding: { sm: '0rem 5rem', xs: '0rem' } }} >
                        <Grid item>
                            <Typography variant="h3" align="center" fontFamily='Titan One' >Join Our Team</Typography>
                        </Grid>
                        <Grid item sx={{ marginTop: { sm: '5rem', xs: '2rem' } }} >
                            <ContactForm button="apply" />
                        </Grid>
                    </Grid>
                </Grid>
            </Reveal>

        </Container>
    </div>
}