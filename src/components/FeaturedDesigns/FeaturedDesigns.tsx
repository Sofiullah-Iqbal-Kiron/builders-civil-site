import {motion} from 'framer-motion';
import {FeaturedDesignCard} from "./FeaturedDesignCard";

import img1 from '../../assets/featured_design/img1.jpg';
import img2 from '../../assets/featured_design/img2.jpg';
import img3 from '../../assets/featured_design/img3.jpg';

const items = [
    {
        title: 'Modern Apartment',
        image: img1,
        price: 1000,
        features: ['3 Bedroom', 'Halogen Light', 'Guest room'],
        page_link: 'https://tailwindcss.com/docs/height'
    },
    {
        title: 'Beautiful Apartment',
        image: img2,
        price: 300,
        features: ['2 Bedroom', '1 Bathroom', '3480 square feet'],
        page_link: 'https://tailwindcss.com/docs/height'
    },
    {
        title: 'Stunning Design',
        image: img3,
        price: 3200,
        features: ['Modern scale', 'More feature', '3800 square feet'],
        page_link: 'https://tailwindcss.com/docs/height'
    },
    {
        title: 'Stunning Design',
        image: img3,
        price: 3200,
        features: ['Modern scale', 'More feature', '3800 square feet'],
        page_link: 'https://tailwindcss.com/docs/height'
    },
    {
        title: 'Stunning Design',
        image: img1,
        price: 3200,
        features: ['Modern scale', 'More feature', '3800 square feet'],
        page_link: 'https://tailwindcss.com/docs/height'
    },
]

export function FeaturedDesigns() {
    return (
        <section className='flex flex-col items-center'>
            <h1 className='text-5xl font-bold text-center pb-10'>Featured Design</h1>
            <div className={`flex flex-row flex-wrap justify-center gap-4`}>
                {
                    items.map((item, idx) =>
                        <FeaturedDesignCard
                            key={idx}
                            title={item.title}
                            image={item.image}
                            price={item.price}
                            features={item.features}
                            page_link={item.page_link}
                        />)
                }
            </div>
        </section>
    )
}