import {Services} from "../../components/civil/Services";
import {Footer} from "../../components/common/Footer";

export function CivilServicesPage() {
    return (
        <section className='pt-[4rem] flex flex-col space-y-10'>
            <Services/>
            <Footer/>
        </section>
    )
}