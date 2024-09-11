import React from 'react'
import { useState } from 'react'
import logo from "../assets/logo.png"
import { LINKS } from '../constants'
import { FaBars, FaTimeline } from 'react-icons/fa6'

const Navbar = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    }

    const handleScroll = (event, targetId) => {
        event.preventDefault();
        const targetElement = document.getElementById(targetId);
        if (targetElement) {
            const offsetTop = targetElement.offsetTop - 80;
            window.scrollTo({
                top: offsetTop,
                behavior: "smooth"
            })
        }
        setIsMobileMenuOpen(false);
    }
    return (
        <nav className='fixed top-4 z-50 w-full flex flex-col items-center justify-center'>
            <div className='flex w-full items-center justify-between overflow-y-hidden p-4 backdrop-blur-lg lg:m-2 lg:w-[50rem] lr-rounded-full lg:shadow-lg'>
                <img src={logo} alt="logo" width={100} height={52} />
                <div className='hidden flex-row items-center gap-8 text-lg font-bold text-white lg:flex'>
                    {LINKS.map((link, index) => (
                        <a href={`#${link.targetId}`} className={`hover:opacity-80 text-sm ${index !== 0 ? "border-neutral-300/20 pl-2" : ""} hover:opacity-50`} key={index} onClick={(event) => handleScroll(event, link.targetId)}>
                            {link.text}
                        </a>
                    ))}
                </div>
                <div className='lg:hidden'>
                    <button onClick={toggleMobileMenu}>
                        {isMobileMenuOpen ? <FaTimeline /> : <FaBars />}
                    </button>
                </div>
            </div>
            {isMobileMenuOpen && (
                <div className='w-ful backdrop-blur-lg lg:hidden'>
                    {LINKS.map((link, index) => (
                        <a href={`#${link.targetId}`} className="block p-4 uppercase tracking-tighter" key={index} onClick={(event) => handleScroll(event, link.targetId)}>
                            {link.text}
                        </a>
                    ))}
                </div>
            )}
        </nav>
    )
}

export default Navbar