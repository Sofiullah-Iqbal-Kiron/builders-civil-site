import {motion} from 'framer-motion';
import {FeaturedDesignCard} from "./FeaturedDesignCard";

import img1 from '../assets/featured/img1.jpg';
import img2 from '../assets/featured/img2.jpg';
import img3 from '../assets/featured/img3.jpg';

const items = [
    {
        title: 'Modern Apartment',
        image_path: img1,
        price: 1000,
        features: ['3 Bedroom', 'Halogen Light', 'Guest room'],
        page_link: 'https://tailwindcss.com/docs/height'
    },
    {
        title: 'Beautiful Apartment',
        image_path: img2,
        price: 300,
        features: ['2 Bedroom', '1 Bathroom', '3480 square feet'],
        page_link: 'https://tailwindcss.com/docs/height'
    },
    {
        title: 'Stunning Design',
        image_path: img3,
        price: 3200,
        features: ['Modern scale', 'More feature', '3800 square feet'],
        page_link: 'https://tailwindcss.com/docs/height'
    },
]

export function FeaturedDesigns() {
    return (
        <section className='flex flex-col items-center'>
            <h1 className='text-5xl font-bold text-center pb-10'>Featured Design</h1>
            <div className='flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-3'>
                {
                    items.map(item =>
                        <FeaturedDesignCard
                            title={item.title}
                            image_path={item.image_path}
                            price={item.price}
                            features={item.features}
                            page_link={item.page_link}
                        />)
                }
            </div>
        </section>
    )
}