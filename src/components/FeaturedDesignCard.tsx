import {FaCheck} from 'react-icons/fa6';

interface FeaturedDesignCardProps {
    title: string,
    image_path: string,
    price: number,
    features: Array<string>,
    page_link: string,
}

export function FeaturedDesignCard({title, image_path, price, features, page_link}: FeaturedDesignCardProps) {
    console.log(image_path);
    return (
        <div
            style={{backgroundImage: `url(${image_path})`}}
            className={`bg-cover w-[13rem] sm:w-[15rem] h-[24rem] sm:h-[25rem] rounded-md`}>
            <div className='h-3/5'/>
            <div className='h-2/5 bg-white/50 backdrop-blur-sm backdrop-saturate-150 backdrop-brightness-125 px-1.5 py-0.5 flex flex-col space-y-1'>
                <div className='flex justify-between font-bold'>
                    <p>
                        {title}
                    </p>
                    <p className='font-mono'>
                        {price + '$'}
                    </p>
                </div>
                <ul className=''>
                    {features.map((feature, idx) =>
                        <li key={idx} className='flex items-center space-x-2'><FaCheck/> <p>{feature}</p></li>)}
                </ul>
                <a href={page_link} className='btn btn-secondary'>
                    See Plan
                </a>
            </div>
        </div>
    )
}