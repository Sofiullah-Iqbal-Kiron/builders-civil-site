import {FeaturedDesigns} from "../../components/civil/FeaturedDesigns/FeaturedDesigns";
import {Footer} from "../../components/common/Footer";

export function ArchitecturePage() {
    return (
        <section className='pt-[4rem] flex flex-col space-y-10'>
            <FeaturedDesigns/>
            <Footer/>
        </section>
    )
}