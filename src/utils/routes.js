import React from 'react'

const Home = React.lazy(() => import('../pages/Home.js'))
const AboutUsPage = React.lazy(() => import('../pages/AboutUsPage.js'))
const CareerPage = React.lazy(() => import('../pages/CareerPage.js'))
const ContactPage = React.lazy(() => import('../pages/ContactPage.js'))
const ServicesPage = React.lazy(() => import('../pages/ServicesPage.js'))

export const routes = [
    {
        link: '/',
        name: 'Home',
        element: <Home />
    },
    {
        link: '/about-us',
        name: 'About Us',
        element: <AboutUsPage />
    },
    {
        link: '/career',
        name: 'Career',
        element: <CareerPage />
    },
    {
        link: '/services',
        name: 'Services',
        element: <ServicesPage />
    },
    {
        link: '/contact-us',
        name: 'Contact Us',
        element: <ContactPage />
    },
]