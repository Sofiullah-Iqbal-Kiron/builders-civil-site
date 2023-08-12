import {motion} from 'framer-motion';

export function Hero() {
    return (
        <section id="#hero" className='min-h-screen ps-10 flex flex-col justify-center space-y-10'>
            <motion.p
                initial={{opacity: 0}}
                animate={{opacity: 1}}
                transition={{duration: 0.5}}
                className='bg-sky-700 text-white w-1/2 p-5'>
                <span>Welcome!</span><br/>
                <span className='text-4xl'>Builder Construction</span><br/>
                <span className='text-lg text-black font-semibold tracking-wider'>We are here to build your dream home.</span><br/>
            </motion.p>
            <motion.p
                initial={{y: 20, opacity: 0}}
                animate={{y: 0, opacity: 1}}
                transition={{delay: 0.3, duration: 0.5}}
                className='text-7xl font-serif text-red-700 font-bold'>
                Global construction <br/> and Engineering
            </motion.p>
            <motion.p
                initial={{y: 20, opacity: 0}}
                animate={{y: 0, opacity: 1}}
                transition={{delay: 0.7, duration: 0.5}}
            >
                Experience and sustainability - these are the keys to success of Byron<br/>for the realisation of large
                international construction projects.
            </motion.p>
            <motion.p
                initial={{x: -100, opacity: 0}}
                animate={{x: 0, opacity: 1}}
                transition={{delay: 1, duration: 0.4}}
            >
                <a href='#get-started' className='px-4 py-3 bg-yellow-400 font-bold text-2xl rounded'>
                    Get Started
                </a>
            </motion.p>
        </section>
    )
}