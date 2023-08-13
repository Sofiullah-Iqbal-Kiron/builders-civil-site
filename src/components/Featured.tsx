import {motion} from 'framer-motion';

export function Featured() {
    return (
        <motion.section
            initial={{opacity: 0}}
            whileInView={{opacity: 1}}
            transition={{delay: 0.1, duration: 0.5}}
        >

        </motion.section>
    )
}