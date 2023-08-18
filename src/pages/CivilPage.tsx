import {Hero} from "../components/civil/Hero";
import {Services} from "../components/civil/Services";
import {FeaturedWorks} from "../components/civil/FeaturedWorks/FeaturedWorks";
import {FeaturedDesigns} from "../components/civil/FeaturedDesigns/FeaturedDesigns";
import {LastMessage} from "../components/civil/LastMessage";
import {WhyChooseUs} from "../components/civil/WhyChooseUs";
import {Footer} from "../components/common/Footer";

export function CivilPage() {
    return (
        <div className='flex flex-col space-y-20'>
            <Hero/>
            <Services/>
            <FeaturedWorks/>
            <FeaturedDesigns/>
            <WhyChooseUs/>
            <LastMessage/>
            <Footer/>
        </div>
    )
}