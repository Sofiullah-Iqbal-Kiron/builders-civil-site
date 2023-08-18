import {motion} from 'framer-motion'

export function ContactUsPage() {
    return (
        <section className='flex flex-col sm:flex-row justify-center items-center h-screen'>
            <motion.p
                initial={{opacity: 0, y: -100}}
                animate={{opacity: 1, y: 0}}
                transition={{type: 'spring', stiffness: 70, duration: 0.6}}

                className='text-3xl sm:text-5xl uppercase font-tiltprism-400 font-serif font-black text-sky-900'>
                Let's Deal With<br/>Your Issues
            </motion.p>
            <motion.form
                initial={{opacity: 0, y: 100}}
                animate={{opacity: 1, y: 0}}
                transition={{type: 'spring', stiffness: 70, duration: 0.6}}
            >
                <label>Name</label>
                <input type='text' className='input'/>
            </motion.form>
        </section>
    )
}