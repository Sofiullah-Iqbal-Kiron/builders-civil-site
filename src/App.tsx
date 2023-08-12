import {useState} from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import {Hero} from "./components/Hero";
import {Services} from "./components/Services";
import {Footer} from "./components/Footer";
import {LastMessage} from "./components/LastMessage";
import {WhyChooseUs} from "./components/WhyChooseUs";

function App() {
    return (
        <div className='bg-gradient-to-r from-sky-100 to-sky-200 flex flex-col space-y-20'>
            <Hero/>
            <Services/>
            <WhyChooseUs/>
            <LastMessage/>
            <Footer/>
        </div>
    )
}

export default App