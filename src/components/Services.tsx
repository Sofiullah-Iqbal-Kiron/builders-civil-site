import {ServiceLink} from "./ServiceLink";
import {FaHouse, FaPeopleRoof, FaMosque, FaBuilding, FaBridge, FaRoad} from 'react-icons/fa6'

export function Services() {
    const services = [
        {icon: <FaHouse/>, title: 'House Design'},
        {icon: <FaPeopleRoof/>, title: 'Office Design'},
        {icon: <FaBuilding/>, title: 'Market Design'},
        {icon: <FaMosque/>, title: 'Mosque Design'},
        {icon: <FaRoad/>, title: 'Road Design'},
        {icon: <FaBridge/>, title: 'Bridge Design'},
    ];

    return (
        <section>
            <h1 className='text-5xl font-bold text-center pb-10'>
                Our Services
            </h1>
            <div className='flex flex-wrap justify-evenly gap-2'>
                {services.map((service) => (
                    <ServiceLink icon={service.icon} name={service.title}/>
                ))}
            </div>
        </section>
    )
}