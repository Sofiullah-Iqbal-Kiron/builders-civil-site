import {FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaYoutube, FaPinterest, FaReddit} from 'react-icons/fa6'

export function Footer() {
    return (
        <section className='bg-gray-950 text-sky-100 px-3 rounded-2xl'>
            <div className='flex flex-col space-y-5 sm:flex-row justify-between text-center'>
                <div className='flex flex-col items-center'>
                    <h1 className='text-3xl font-bold text-yellow-300 font-serif px-4 py-2 rounded'>Offices of the
                        company</h1>
                    <div className='flex flex-col space-y-5 sm:flex-row sm:space-x-10'>
                        <div>
                            <h3 className='text-xl font-semibold uppercase'>USA</h3>
                            <ul className='text-left'>
                                <li>New York, NY 10012</li>
                                <li>info@example.com</li>
                                <li>+01 234 567</li>
                                <li>+01 234 567</li>
                            </ul>
                        </div>
                        <div>
                            <h3 className='text-xl font-semibold uppercase'>UK</h3>
                            <ul className='text-right'>
                                <li>New York, NY 10012</li>
                                <li>info@example.com</li>
                                <li>+01 234 567</li>
                                <li>+01 234 567</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div>
                    <h1 className='text-3xl font-bold text-yellow-300 font-serif px-4 py-2 rounded'>Others</h1>
                    <ul>
                        <li><a href='#cookies'>Cookies</a></li>
                        <li><a href='#contact-us'>Contact us</a></li>
                        <li><a href='#help-and-support'>Help & support</a></li>
                        <li><a href='#about-us'>About us</a></li>
                        <li><a href='#code-of-conduct'>Code of conduct</a></li>
                        <li><a href='#privacy-policy'>Privacy policy</a></li>
                        <li><a href='#return-policy'>Return policy</a></li>
                        <li><a href='#global-locations'>Global locations</a></li>
                        <li><a href='#global-suppliers'>Global suppliers</a></li>
                    </ul>
                </div>
                <div>
                    <h1 className='text-3xl font-bold text-yellow-300 font-serif px-4 py-2 rounded'>Security
                        services</h1>
                    <ul>
                        <li><a href='#fire-safety'>FIRE SAFETY</a></li>
                        <li><a href='#electrical-safety'>ELECTRICAL SAFETY</a></li>
                        <li><a href='#detailed-engineering'>Detailed Engineering</a></li>
                        <li><a href='#assessment'>Assessment</a></li>
                        <li><a href='#energy-efficiency-audit'>ENERGY EFFICIENCY AUDIT</a></li>
                        <li><a href='#architectural-support'>ARCHITECTURAL SUPPORT</a></li>
                        <li><a href='#testing-and-training'>TESTING & TRAINING</a></li>
                        <li><a href='#environment'>ENVIRONMENT & SOCIAL IMPACT</a></li>
                        <li><a href='#green-building'>GREEN BUILDING</a></li>
                        <li><a href='#cap-management'>CAP MANAGEMENT</a></li>
                        <li><a href='#material-testing'>Material Testing</a></li>
                    </ul>
                </div>
            </div>
            {/*<div className='bg-blue-950 rounded min-h-[0.1rem] mt-1 mb-3'/>*/}
            <div className='flex flex-col mt-5 sm:mt-0 sm:flex-row space-y-2 sm:space-x-3 items-center justify-center'>
                <p className='text-xl font-semibold'>Be with us:</p>
                <input type="email" placeholder='enter your email' className='text-input-1 text-lg text-black'/>
                <button className='button-success text-black font-semibold'>Subscribe</button>
            </div>
            <div id='#payments' className='flex space-x-2 py-1'>
                <h2>We accepts: </h2>
                <ul>
                    <li><img src='none' alt='amex'/></li>
                </ul>
            </div>
            <ul id='#footer-social-links' className='flex flex-row justify-center items-center space-x-3 pt-2 pb-3'>
                <li><a href='#twitter'><FaTwitter className='sm:text-3xl'/></a></li>
                <li><a href='#facebook'><FaFacebook className='sm:text-3xl'/></a></li>
                <li><a href='#instagram'><FaInstagram className='sm:text-3xl'/></a></li>
                <li><a href='#linkedin'><FaLinkedin className='sm:text-3xl'/></a></li>
                <li><a href='#youtube'><FaYoutube className='sm:text-3xl'/></a></li>
                <li><a href='#pinterest'><FaPinterest className='sm:text-3xl'/></a></li>
                <li><a href='#reddit'><FaReddit className='sm:text-3xl'/></a></li>
            </ul>
        </section>
    )
}