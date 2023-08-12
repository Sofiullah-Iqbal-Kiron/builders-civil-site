import {motion} from 'framer-motion';
import {FaRightLong} from "react-icons/fa6";

export function Hero() {
    return (
        <section id="#hero" className='sm:min-h-screen sm:ps-10 flex flex-col justify-center items-center sm:items-start space-y-10'>
            <motion.p
                initial={{opacity: 0}}
                animate={{opacity: 1}}
                transition={{duration: 0.5}}
                className='bg-sky-700 text-white shadow-md shadow-blue-500/40 self-center text-center sm:text-left sm:self-start sm:w-1/2 p-5 mt-5'>
                <span>Welcome!</span><br/>
                <span className='text-2xl sm:text-4xl'>Builder Construction</span><br/>
                <span className='text-md sm:text-lg text-black font-semibold tracking-wider'>We are here to build your dream home.</span><br/>
            </motion.p>
            <motion.p
                initial={{y: 20, opacity: 0}}
                animate={{y: 0, opacity: 1}}
                transition={{delay: 0.5, duration: 0.5}}
                className='text-5xl sm:text-7xl text-center sm:text-left font-serif text-red-700 font-semibold sm:font-bold'>
                Global construction <br/> and Engineering
            </motion.p>
            <motion.p
                initial={{y: 20, opacity: 0}}
                animate={{y: 0, opacity: 1}}
                transition={{delay: 1, duration: 0.5}}
                className='text-center sm:text-left'
            >
                Experience and sustainability - these are the keys to success of Byron<br/>for the realisation of large
                international construction projects.
            </motion.p>
            <motion.p
                initial={{x: -100, opacity: 0}}
                animate={{x: 0, opacity: 1}}
                transition={{delay: 1.5, duration: 0.4}}
            >
                <a href='#get-started' className='px-4 py-3 bg-gradient-to-r from-yellow-500 to-yellow-200 shadow-xl text-gray-800 font-bold text-md sm:text-2xl rounded flex justify-center items-center space-x-10 w-80'>
                    <p>Get Started</p> <FaRightLong/>
                </a>
            </motion.p>
        </section>
    )
}