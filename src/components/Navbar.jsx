import React, { useState, useContext } from 'react';
import { motion } from 'framer-motion';
import { CiLight } from "react-icons/ci";
import { MdDarkMode } from "react-icons/md";
import logo from "../assets/logo.png";
import LogoDark from "../assets/LogoDark.png";
import { LINKS } from '../constants';
import { FaBars, FaTimeline } from 'react-icons/fa6';
import { ThemeContext } from '../components/ThemeContext';

const Navbar = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const { theme, toggleTheme } = useContext(ThemeContext);

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    const handleScroll = (event, targetId) => {
        event.preventDefault();
        const targetElement = document.getElementById(targetId);
        if (targetElement) {
            const offsetTop = targetElement.offsetTop - 80;
            window.scrollTo({
                top: offsetTop,
                behavior: "smooth",
            });
        }
        setIsMobileMenuOpen(false);
    };

    return (
        <nav className='fixed top-0 z-50 w-full flex flex-col items-center justify-center'>
            <motion.div
                layout
                className='flex w-full items-center justify-between p-4 dark:bg-gray-100 backdrop-blur-lg dark:shadow-gray-400 lg:m-2 lg:w-[50rem] lg:rounded-full lg:shadow-lg'
            >
                <img src={theme === "light" ? logo : LogoDark} alt="logo" width={100} height={52} className='mx-2' />

                <div className='hidden flex-row items-center gap-8 text-lg font-bold lg:flex'>
                    {LINKS.map((link, index) => (
                        <motion.a
                            transition={{ duration: 0.3, delay: 0.1 }}
                            whileHover={{ scale: 0.8 }}
                            href={`#${link.targetId}`}
                            className={`hover:opacity-80 text-sm ${index !== 0 ? "border-neutral-300/20 pl-2" : ""} hover:opacity-50`}
                            key={index}
                            onClick={(event) => handleScroll(event, link.targetId)}
                        >
                            {link.text}
                        </motion.a>
                    ))}
                    <motion.button
                        transition={{ duration: 0.5 }}
                        whileHover={{ scale: 1.5 }}
                        onClick={toggleTheme}
                        className='ml-4 px-4 py-2 text-sm font-semibold transition bg-transparent rounded-full flex items-center justify-center'
                    >
                        {theme === 'light' ? <MdDarkMode className="" size={24} /> : <CiLight className="" size={24} />}
                    </motion.button>
                </div>

                <div className='lg:hidden'>
                    <motion.button
                        transition={{ duration: 0.5 }}
                        onClick={toggleMobileMenu} className=''>
                        {isMobileMenuOpen ? <FaTimeline size={24} /> : <FaBars size={24} />}
                    </motion.button>
                </div>
            </motion.div>

            {isMobileMenuOpen && (
                <motion.div
                    layout
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    transition={{ duration: 0.7 }}
                    className='w-full backdrop-blur-xl dark:bg-gray-100 rounded-md lg:hidden mt-2'>
                    <div className="flex flex-col items-center gap-4 p-4">
                        {LINKS.map((link, index) => (
                            <motion.a
                                transition={{ duration: 0.3, delay: 0.1 }}
                                whileHover={{ scale: 0.8 }}
                                href={`#${link.targetId}`}
                                className='block text-lg font-semibold uppercase tracking-tight'
                                key={index}
                                onClick={(event) => handleScroll(event, link.targetId)}
                            >
                                {link.text}
                            </motion.a>
                        ))}
                        <motion.button
                            transition={{ duration: 0.5 }}
                            whileHover={{ scale: 1.5 }}
                            onClick={toggleTheme}
                            className='mt-4 w-1/2 p-4 bg-transparent text-center uppercase rounded-full flex items-center justify-center'
                        >
                            {theme === 'light' ? <MdDarkMode size={24} /> : <CiLight size={24} />}
                        </motion.button>
                    </div>
                </motion.div>
            )}
        </nav>
    );
};

export default Navbar;
