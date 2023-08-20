import {FaGlobeAsia, FaHome, FaLaptop, FaUserSecret} from "react-icons/fa";
import {MdOutlineConnectWithoutContact} from "react-icons/md";
import {GrServices} from "react-icons/gr";
import {Link} from "react-router-dom";

const nav_items = [
    {
        text: 'Home',
        icon: <FaHome/>,
        link: 'civil',
    },
    {
        text: 'Architecture',
        icon: <FaLaptop/>,
        link: 'architecture',
    },
    {
        text: 'Our Services',
        icon: <GrServices/>,
        link: 'services',
    },
    {
        text: 'Notice',
        icon: <FaLaptop/>,
        link: 'notice',
    },
    {
        text: 'Security',
        icon: <FaUserSecret/>,
        link: 'security',
    },
    {
        text: 'Contact Us',
        icon: <MdOutlineConnectWithoutContact/>,
        link: 'contact-us',
    },
    {
        text: 'Company Info',
        icon: <FaLaptop/>,
        link: 'company',
    },
    {
        text: 'Login',
        icon: <FaLaptop/>,
        link: 'login',
    },
]

export function Navbar() {
    return (
        <div
            className='w-full h-[3.5rem] bg-white/60 backdrop-blur-2xl backdrop-brightness-150 backdrop-saturate-150 fixed top-0 inset-x-0 z-10 font-semibold flex justify-between items-center px-1'>
            <ul className='flex space-x-4 text-3xl'>
                <li key={'glob1'}><FaGlobeAsia/></li>
                <li key={'glob2'}><FaGlobeAsia/></li>
                <li key={'glob3'}><FaGlobeAsia/></li>
            </ul>

            <div className='flex space-x-6'>
                {
                    nav_items.map((m, idx) =>
                        <Link key={idx}
                           to={m.link}
                           className='flex flex-col items-center hover:text-blue-500 transition-colors duration-150'>
                            {m.icon}
                            <p>
                                {m.text}
                            </p>
                        </Link>)
                }
            </div>
        </div>
    )
}