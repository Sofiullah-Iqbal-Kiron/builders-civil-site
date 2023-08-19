import {motion} from 'framer-motion'

export function ContactUsPage() {
    return (
        <section className='flex flex-col sm:flex-row justify-center sm:justify-evenly items-center h-screen'>
            <motion.p
                initial={{opacity: 0, y: -100}}
                animate={{opacity: 1, y: 0}}
                transition={{type: 'spring', stiffness: 70, duration: 0.6}}

                className='text-3xl sm:text-5xl uppercase font-tiltprism-400 font-serif font-black text-sky-900'>
                Let's Deal With<br/>Your Issues
            </motion.p>

            <motion.div
                initial={{opacity: 0, y: 100}}
                animate={{opacity: 1, y: 0}}
                transition={{type: 'spring', stiffness: 70, duration: 0.6}}

                className="bg-green-200 rounded-3xl">
                <div className="p-8 shadow-lg">
                    <form className="space-y-4">
                        <div className="w-full">
                            <label className="sr-only" htmlFor="name">Name</label>
                            <input className="input input-solid-success max-w-full" placeholder="Full Name" type="text"
                                   id="name"/>
                        </div>

                        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                            <div>
                                <label className="sr-only" htmlFor="email">Email</label>
                                <input className="input input-solid-success" placeholder="Email" type="email"
                                       id="email"/>
                            </div>

                            <div>
                                <label className="sr-only" htmlFor="phone">Phone</label>
                                <input className="input input-solid-success" placeholder="Phone Number" type="tel"
                                       id="phone"/>
                            </div>
                        </div>

                        <div className="w-full">
                            <label className="sr-only" htmlFor="message">Message</label>
                            <textarea className="textarea textarea-solid-success max-w-full"
                                      placeholder="Leave few words for us"
                                      rows={8}
                                      id="message"
                            />
                        </div>

                        <div className="mt-4">
                            <button type="button" className="rounded-lg btn btn-secondary btn-block">Send Enquiry
                            </button>
                        </div>
                    </form>
                </div>
            </motion.div>
        </section>
    )
}