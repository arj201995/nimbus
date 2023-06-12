import { Box, Card, CardContent, CardMedia, Divider, Typography } from "@mui/material"
import ServiceHome from '../assets/services.webp'
import classes from '../styles/services.module.css'
import { Reveal } from "./Reveal"

export const services = [{
    id: 'offshore',
    title: 'Offshore Recruiters',
    details: "We provide offshore recruiters at a very reasonable price.Recruiter will work 9 hours / day and 5 days / week according to your preferred time zone.Recruiter will give you one or two quality submissions every single day.We are specialized in in IT, non- IT, Engineering, Pharma, Healthcare, Hospitality, Finance and Accounting, Administration, Manufacturing, Robotics, Legal, Corporate, Customer service, Aerospace, Retail, Education, Scientific, Real Estate, Sales, Marketing, Advertising, Light Industry, Chemicals, Bio - medical, Oil Industry, Aviation, Telecom, Scientific, Airlines, Cyber security, e - commerce etc.We have all the premium job boards such as Career Builder, Indeed, Dice, Monster, Tech Fetch, LinkedIn, etc.We also provide one day free trial so that you can review the quality of the submissions / candidates.",
    imgUrl: require('../assets/r3.webp')
},
{
    id: 'sourcing',
    title: 'Sourcing',
    details: 'We can give you our sourcer at a very reasonable price, and our sourcer will give 8-10 quality resumes from all over the job boards daily.',
    imgUrl: require('../assets/r1.webp')
},
{
    id: 'webdev',
    title: "Web Development Services",
    details: "We provide services like website design, website development, web programming, SEO, digital strategy and E-Commerce development. We work on various technologies such as React, HTML, PHP, Ruby, WIX, WordPress, Python, CSS, JavaScript, etc.",
    imgUrl: require('../assets/webdev.webp')
},
{
    id: 'benchsales',
    title: "Bench Sales",
    details: "Our Bench Sales Recruiter will be involved in selling the bench consultants, including searching, qualifying, scheduling interviews, rate negotiations, and closing. He will be involved in sales i.e. bench consultants to the Vendors and Clients for the requirements. We can also place your candidates with the help our own clients because we do have so many running clients who have tons of positions.",
    imgUrl: require('../assets/r3.webp')
},
{
    id: 'offshorebdm',
    title: "Offshore BDM",
    details: "We also provide Business Development Manager at a very reasonable price, if you hire our BD then he/she will bring quality clients to your firm. We can enhance your business to a great extent. All the BD's that we have are having the experience of more than 10+ years.",
    imgUrl: require('../assets/bdm.webp')
},
{
    id: 'va',
    title: "Virtual Assistant",
    details: "Our VA's will be responsible for scheduling appointments, making phone calls, making travel arrangements, managing email accounts, etc for you.",
    imgUrl: require('../assets/va.webp')

},
{
    id: 'csr',
    title: "Customer Service Representative",
    details: "We can provide you the CSR services as well. Our CSR will be responsible for handling chats/email/calls in order to resolve the issue of the customer(s). His top priority will be customer satisfaction.",
    imgUrl: require('../assets/csr.webp')
}
]


export const Services = () => {

    return <div className={classes.service__container}>
        <Box className={classes.service_img_container}>

            <img src={ServiceHome} alt="welcome to services" loading="lazy" className={classes.service_img} />

            <div className={classes.serviceoverlay}>
                <div className={classes.service__content} >
                    <Typography variant="h3" fontFamily="Titan One">
                        Exclusive Services
                    </Typography>
                    <Typography variant="h6" sx={{ fontSize: { xs: '0.915rem', sm: '1.3rem' } }} >
                        Welcome to MindSuperior Consult, where we offer a comprehensive suite of services designed to transform your talent acquisition process. With a focus on delivering exceptional results, our dedicated team of recruitment experts takes charge of sourcing, screening, and selecting top-tier candidates for your organization. We leverage cutting-edge technology and data-driven insights to identify the most suitable talent, ensuring a perfect fit for your company culture and objectives.
                    </Typography>
                </div>
            </div>
        </Box>
        <div className={classes.service_content_container} >
            {services.map((service, index) =>
                <Reveal key={`${service.imgUrl}b-${index}`}>
                    <Card id={service.id} sx={{ display: 'flex', flexDirection: { md: `${index % 2 === 0 ? 'row-reverse' : 'row'}`, xs: "column" }, gap: '0.5rem', padding: '1rem' }}>

                        <CardMedia height="300" component="img" alt={service.title} src={service.imgUrl} loading="lazy" sx={{ width: { sm: '30%', xs: "100%" } }} />
                        <CardContent>
                            <Typography variant="h4" fontFamily="Titan One" sx={{ fontSize: { xs: '1.5rem', sm: '2rem' }, marginBottom: { xs: '0.5rem' }, textAlign: { xs: 'center', md: 'justify' } }} >{service.title}</Typography>
                            <Divider />
                            <Typography variant="h7" fontWeight="bold" sx={{ textAlign: 'justify' }} lineHeight="1.7rem">{service.details}</Typography>
                        </CardContent>
                    </Card>
                </Reveal>)
            }

        </div>
    </div >
}