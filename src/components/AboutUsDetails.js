import { Card, CardContent, CardMedia, Typography } from '@mui/material'
import AboutUsDetailsImg from '../assets/aboutus.webp'
import Partnership from '../assets/partnership.webp'
import Trust from '../assets/trust.webp'
import classes from '../styles/aboutusdetails.module.css'
import styled from '@emotion/styled'
import { Reveal } from './Reveal'

const StyledCard = styled(Card)(({ theme }) => ({
    display: 'flex', flexDirection: 'row', padding: '0.5rem',
    [theme.breakpoints.down('sm')]: {
        flexDirection: 'column'
    }
}))

const StyledCardMedia = styled(CardMedia)(({ theme }) => ({
    width: '25%',
    [theme.breakpoints.down('sm')]: {
        width: '100%',
        margin: 'auto'
    }
}))

export const AboutUsDetails = () => {
    return <div className={classes.aboutusdetails}>
        <Reveal>

            <StyledCard elevation={6}>
                <StyledCardMedia component="img" alt="us" src={AboutUsDetailsImg} />
                < CardContent sx={{ width: { sm: '90%', md: '100%', lg: '100%' } }} >
                    <Typography variant="h3" fontFamily="Titan One" align="center" my={2}>About Us</Typography>
                    <Typography variant="h5" fontFamily="Titan One" align="center" mb={5}>Finding Inspiration in Every Turn</Typography>
                    <Typography variant="h7" sx={{ fontSize: '1.1rem', fontWeight: 500, lineHeight: '1.6rem' }} >
                        Welcome to MindSuperior Consult, your trusted partner in Recruitment Outsourcing.
                        We are a dedicated team of experts who are passionate about revolutionizing the
                        way organizations attract, engage, and retain top talent. With our strategic
                        approach and industry-leading expertise, we are committed to helping you build
                        a high-performing workforce that drives sustainable growth and success.
                        At MindSuperior Consult, we understand that finding and hiring the right talent is crucial
                        for organizations to thrive in today's competitive landscape. However, the
                        traditional recruitment process can be time-consuming, resource-intensive, and
                        often falls short of delivering the desired results. That's where we come in. We offer
                        end-to-end recruitment solutions that streamline your recruitment processes,
                        enhance your employer brand, and deliver exceptional candidates who align
                        with your organizational goals and culture.
                    </Typography>
                </CardContent>
            </StyledCard>
        </Reveal>
        <Reveal>

            <StyledCard elevation={6} sx={{ flexDirection: { sm: 'row !important', xs: 'column-reverse !important' } }}>
                <CardContent sx={{ width: { sm: '90%', md: '100%', lg: '100%' } }}>
                    <Typography variant="h7" sx={{ fontSize: '1.1rem', fontWeight: 500, lineHeight: '1.6rem' }} >
                        Our approach is centered around partnership. We believe that a successful engagement requires a deep understanding of your unique business needs, values, and objectives. We take the time to immerse ourselves in your organization, becoming an extension of your HR team. By aligning our strategies and processes with your company's vision, we create a seamless and efficient recruitment ecosystem that is tailored to your specific requirements.


                        Our team consists of seasoned recruitment professionals who bring a wealth of experience across various industries. With their specialized knowledge, cutting-edge technology, and data-driven insights, they have a proven track record of delivering exceptional results. From talent acquisition to onboarding,

                        we leverage best practices and innovative techniques to attract top talent, identify high-potential candidates, and ensure a smooth transition into your organization.


                        We understand that your success depends on the quality and cultural fit of the candidates we present to you. Our rigorous screening processes and comprehensive assessments go beyond resumes and qualifications. We dig deeper to evaluate a candidate's potential, skills, values, and motivation to ensure they are the right fit for your organization. By presenting you with a curated pool of top-tier candidates, we save you valuable time and resources, allowing you to focus on what you do best – driving your business forward.
                    </Typography>
                </CardContent>
                <StyledCardMedia component="img" alt="us" src={Partnership} />
            </StyledCard>
        </Reveal>
        <Reveal>

            <StyledCard elevation={6} >
                <StyledCardMedia component="img" alt="us" src={Trust} />
                < CardContent sx={{ width: { sm: '90%', md: '100%', lg: '100%' } }}>
                    <Typography variant="h7" sx={{ fontSize: '1.1rem', fontWeight: 500, lineHeight: '1.6rem' }} >
                        At MindSuperior Consult, we are not just another vendor; we are your strategic partner in talent acquisition. We are committed to building a long-lasting relationship based on trust, transparency, and collaboration. We keep you informed every step of the way, providing real-time updates, analytics, and insights that enable data-driven decision-making. Our partnership extends beyond recruitment; we offer ongoing support, guidance, and expertise to help you navigate the ever-changing talent landscape.



                        We are driven by innovation and continuous improvement. Our commitment to staying at the forefront of industry trends and leveraging the latest recruitment technologies ensures that you benefit from the most effective and efficient solutions. We embrace automation, artificial intelligence, and predictive analytics to streamline your recruitment processes, enhance candidate experience, and drive better outcomes.



                        At MindSuperior Consult, we measure our success by your success. We take pride in the positive impact we make on your organization – helping you attract and retain top talent, reduce time-to-fill, improve quality of hire, and enhance your employer brand. Our dedication to excellence, integrity, and delivering measurable results has earned us the trust of organizations across various sectors.



                        Thank you for choosing MindSuperior Consult as your partner. We are excited to embark on this transformative journey with you, revolutionizing your recruitment processes and driving your organization towards a future of sustainable growth and success. Together, we will build a workforce that sets new standards of excellence and positions your organization as an employer of choice in the industry.
                    </Typography>
                </CardContent>
            </StyledCard>
        </Reveal>
    </div >
}