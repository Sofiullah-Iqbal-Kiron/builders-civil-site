import {ServiceLink} from "./ServiceLink";

export function Services() {
    const services = [
        {icon: 'house icon', title: 'House Design'},
        {icon: 'office icon', title: 'Office Design'},
        {icon: 'market icon', title: 'Market Design'},
        {icon: 'mosque icon', title: 'Mosque Design'},
        {icon: 'road icon', title: 'Road Design'},
        {icon: 'bridge icon', title: 'Bridge Design'},
    ];

    return (
        <section>
            <h1 className='text-5xl font-bold text-center pb-10'>
                Our Services
            </h1>
            <div className='flex flex-wrap justify-around space-y-3'>
                {services.map((service) => (
                    <ServiceLink icon={service.icon} name={service.title}/>
                ))}
            </div>
        </section>
    )
}