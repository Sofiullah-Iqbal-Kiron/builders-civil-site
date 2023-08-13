import {ServiceLink} from "./ServiceLink";
import {FaHouse, FaPeopleRoof, FaMosque, FaBuilding, FaBridge, FaRoad} from 'react-icons/fa6'

export function Services() {
    const services = [
        {icon: <FaHouse className='text-green-600'/>, title: 'House Design'},
        {icon: <FaPeopleRoof className='text-blue-600'/>, title: 'Office Design'},
        {icon: <FaBuilding className='text-pink-500'/>, title: 'Market Design'},
        {icon: <FaMosque className='text-lime-800'/>, title: 'Mosque Design'},
        {icon: <FaRoad className='text-gray-800'/>, title: 'Road Design'},
        {icon: <FaBridge className='text-violet-600'/>, title: 'Bridge Design'},
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