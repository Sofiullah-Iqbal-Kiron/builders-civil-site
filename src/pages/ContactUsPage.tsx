import {motion} from 'framer-motion'
import {VscSend} from "react-icons/vsc";

export function ContactUsPage() {
    return (
        <section
            className='flex flex-col sm:flex-row justify-evenly items-center h-screen bg-violet-800'>
            <motion.p
                initial={{opacity: 0, y: -100}}
                animate={{opacity: 1, y: 0}}
                transition={{type: 'spring', stiffness: 70, duration: 0.6}}

                className='text-3xl sm:text-5xl uppercase font-tiltprism-400 font-serif font-black text-gray-100'>
                Let's Deal With<br/>Your Issues
            </motion.p>

            <motion.form
                initial={{opacity: 0, y: 100}}
                animate={{opacity: 1, y: 0}}
                transition={{type: 'spring', stiffness: 70, duration: 0.6}}

                className='flex flex-col space-y-1 items-center mx-4 sm:mx-0'
            >
                <div className='flex space-x-1'>
                    <input className='input-solid-primary input rounded-none rounded-tl-xl'
                           placeholder='first name' required={true}/>
                    <input className='input-solid-primary input rounded-none rounded-tr-xl'
                           placeholder='last name' required={false}/>
                </div>
                <div className='flex space-x-1'>
                    <input className='input-solid-primary input rounded-none' placeholder='email' required={true}/>
                    <input className='input-solid-primary input rounded-none' placeholder='number' required={true}/>
                </div>
                <textarea className='textarea-solid-primary textarea-block textarea h-[10rem] rounded-t-none'
                          placeholder='please put few words for us'/>
                <div className='h-[0.5rem]'/>

                <button type='submit' className='btn btn-primary sm:btn-ghost-primary w-full rounded-md text-xl'>
                    Send
                </button>
            </motion.form>
        </section>
    )
}