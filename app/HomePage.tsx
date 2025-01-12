import Academy from '@/components/Academy'
import Contact from '@/components/Contact'
import Hero from '@/components/Hero'
import Navbar from '@/components/Navbar'
// import Programs from '@/components/Programs'
import Services from '@/components/Services'
import Stats from '@/components/Stats'
import TechStack from '@/components/TechStack'
// import Testimonials from '@/components/Testimonials'
import React from 'react'

const HomePage = () => {
    return (
        <>
            <Navbar />
            <Hero />
            <Services />
            <Academy />
            {/* <Programs /> */}
            <Stats />
            <TechStack />
            {/* <Testimonials /> */}
            <Contact />
        </>
    )
}

export default HomePage