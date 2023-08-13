import {motion} from 'framer-motion';

import {FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaYoutube, FaPinterest, FaReddit} from 'react-icons/fa6'

import usaflag from '../assets/footer/USA flag.svg';
import ukflag from '../assets/footer/UK flag.svg';

import amex from '../assets/footer/amex.svg';
import apple_pay from '../assets/footer/apple-pay.svg';
import google_pay from '../assets/footer/google-pay.svg';
import master_card from '../assets/footer/master-card.svg';
import payoneer from '../assets/footer/payoneer.svg';
import paypal from '../assets/footer/paypal.svg';
import visa_card from '../assets/footer/visa-card.svg';

const payment_methods = [
    {logo: amex, tooltip: 'amex'},
    {logo: apple_pay, tooltip: 'apple pay'},
    {logo: google_pay, tooltip: 'google pay'},
    {logo: master_card, tooltip: 'master card'},
    {logo: paypal, tooltip: 'paypal'},
    {logo: payoneer, tooltip: 'payoneer'},
    {logo: visa_card, tooltip: 'visa card'},
]

const screen_width = screen.width;
const sm_screen = screen_width < 640;
const md_screen = screen_width >= 640 && screen_width <= 768;
const lg_screen = screen_width > 768;

export function Footer() {
    return (
        <section className='bg-gray-950 text-sky-100 px-3 rounded-2xl'>
            <div
                className='flex flex-col sm:flex-row space-y-5 sm:space-y-0 justify-between sm:justify-around sm:mb-3 text-center'>
                <div className='flex flex-col items-center'>
                    <h1 className='text-3xl font-bold text-yellow-300 font-merriweather-900 px-4 py-2 rounded'>Offices
                        of the
                        company</h1>
                    <div className='flex flex-col sm:flex-row space-y-5 sm:space-y-0 sm:space-x-10'>
                        <div>
                            <div className='flex space-x-3 justify-center'>
                                <img src={usaflag} alt='USA flag' width={25}/>
                                <h3 className='text-xl font-semibold uppercase'>USA</h3>
                            </div>
                            <ul className='text-left'>
                                <li>New York, NY 10012</li>
                                <li>info@example.com</li>
                                <li>+01 234 567</li>
                                <li>+01 234 567</li>
                            </ul>
                        </div>
                        <div>
                            <div className='flex space-x-3 justify-center'>
                                <img src={ukflag} alt='UK flag' width={25}/>
                                <h3 className='text-xl font-semibold uppercase'>UK</h3>
                            </div>
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
                    <h1 className='text-3xl font-bold text-yellow-300 font-merriweather-900 px-4 py-2 rounded'>Security
                        services</h1>
                    <ul className=''>
                        <li className='hover:text-blue-500 transition-colors duration-150'>
                            <a href='#fire-safety'>Fire Safety</a>
                        </li>
                        <li className='hover:text-blue-500 transition-colors duration-150'>
                            <a href='#electrical-safety'>Electrical Safety</a>
                        </li>
                        <li className='hover:text-blue-500 transition-colors duration-150'>
                            <a href='#detailed-engineering'>Detailed Engineering</a>
                        </li>
                        <li className='hover:text-blue-500 transition-colors duration-150'>
                            <a href='#assessment'>Assessment</a>
                        </li>
                        <li className='hover:text-blue-500 transition-colors duration-150'>
                            <a href='#energy-efficiency-audit'>Energy Efficiency Audit</a>
                        </li>
                        <li className='hover:text-blue-500 transition-colors duration-150'>
                            <a href='#architectural-support'>Architectural Support</a>
                        </li>
                        <li className='hover:text-blue-500 transition-colors duration-150'>
                            <a href='#testing-and-training'>Testing & Training</a>
                        </li>
                        <li className='hover:text-blue-500 transition-colors duration-150'>
                            <a href='#environment'>Environment & Social Impact</a>
                        </li>
                        <li className='hover:text-blue-500 transition-colors duration-150'>
                            <a href='#green-building'>Green Building</a>
                        </li>
                        <li className='hover:text-blue-500 transition-colors duration-150'>
                            <a href='#cap-management'>CAP Management</a>
                        </li>
                        <li className='hover:text-blue-500 transition-colors duration-150'>
                            <a href='#material-testing'>Material Testing</a>
                        </li>
                    </ul>
                </div>

                <div>
                    <h1 className='text-3xl font-bold text-yellow-300 font-merriweather-900 px-4 py-2 rounded'>Others</h1>
                    <ul>
                        <li className='hover:text-blue-500 transition-colors duration-150'>
                            <a href='#cookies'>Cookies</a>
                        </li>
                        <li className='hover:text-blue-500 transition-colors duration-150'>
                            <a href='#contact-us'>Contact us</a>
                        </li>
                        <li className='hover:text-blue-500 transition-colors duration-150'>
                            <a href='#help-and-support'>Help & support</a>
                        </li>
                        <li className='hover:text-blue-500 transition-colors duration-150'>
                            <a href='#code-of-conduct'>Code of conduct</a>
                        </li>
                        <li className='hover:text-blue-500 transition-colors duration-150'>
                            <a href='#privacy-policy'>Privacy policy</a>
                        </li>
                        <li className='hover:text-blue-500 transition-colors duration-150'>
                            <a href='#return-policy'>Return policy</a>
                        </li>
                        <li className='hover:text-blue-500 transition-colors duration-150'>
                            <a href='#global-locations'>Global locations</a>
                        </li>
                        <li className='hover:text-blue-500 transition-colors duration-150'>
                            <a href='#global-suppliers'>Global suppliers</a>
                        </li>
                        <li className='hover:text-blue-500 transition-colors duration-150'>
                            <a href='#about-us'>About us</a>
                        </li>
                    </ul>
                </div>
            </div>

            <div className='flex flex-col mt-5 sm:mt-0 sm:flex-row space-y-2 sm:space-x-3 items-center justify-center'>
                <p className='text-xl font-semibold font-mono'>Stay updated:</p>
                <input type="email" placeholder='enter your email' className='text-input-1 text-lg text-black'/>
                <button className='btn btn-primary'>Subscribe</button>
            </div>

            <div id='payment-methods' className='flex flex-wrap justify-center space-x-3 mt-4'>
                {payment_methods.map((method, idx) =>
                    <img key={idx} src={method.logo} alt={method.tooltip}
                         width={sm_screen ? 35 : (md_screen ? 47 : 60)}/>
                )}
            </div>

            <ul id='#footer-social-links'
                className='flex flex-row justify-center items-center space-x-4 pt-2 pb-3 mt-5'>
                <span className='tooltip tooltip-left' data-tooltip='twitter'>
                    <li className='hover:scale-125 transition-all duration-150'>
                        <a href='#twitter'><FaTwitter className='text-sky-300 sm:text-3xl'/></a>
                    </li>
                </span>
                <span className='tooltip tooltip-top' data-tooltip='facebook'>
                    <li className='hover:scale-125 transition-all duration-150'>
                        <a href='#facebook'><FaFacebook className='text-blue-500 sm:text-3xl'/></a>
                    </li>
                </span>
                <span className='tooltip tooltip-top' data-tooltip='instagram'>
                    <li className='hover:scale-125 transition-all duration-150'>
                        <a href='#instagram'><FaInstagram className='text-rose-500 sm:text-3xl'/></a>
                    </li>
                </span>
                <span className='tooltip tooltip-top' data-tooltip='linkedin'>
                    <li className='hover:scale-125 transition-all duration-150'>
                        <a href='#linkedin'><FaLinkedin className='text-blue-700 sm:text-3xl'/></a>
                    </li>
                </span>
                <span className='tooltip tooltip-top' data-tooltip='youtube'>
                    <li className='hover:scale-125 transition-all duration-150'>
                        <a href='#youtube'><FaYoutube className='text-red-600 sm:text-3xl'/></a>
                    </li>
                </span>
                <span className='tooltip tooltip-top' data-tooltip='pinterest'>
                    <li className='hover:scale-125 transition-all duration-150'>
                        <a href='#pinterest'><FaPinterest className='text-rose-800 sm:text-3xl'/></a>
                    </li>
                </span>
                <span className='tooltip tooltip-right' data-tooltip='reddit'>
                    <li className='hover:scale-125 transition-all duration-150'>
                        <a href='#reddit'><FaReddit className='text-orange-500 sm:text-3xl'/></a>
                    </li>
                </span>
            </ul>
        </section>
    )
}