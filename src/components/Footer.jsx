import React, { useContext } from 'react'
import { SOCIAL_MEDIA_LINKS } from '../constants'
import logo from "../assets/logo.png"
import LogoDark from "../assets/LogoDark.png";
import hero from "../assets/hero.png"
import { ThemeContext } from './ThemeContext';

export const Footer = () => {
    const { theme } = useContext(ThemeContext);
    return (
        <div className='mb-8 mt-20'>
            <div className='flex items-center justify-center gap-8'>
                {SOCIAL_MEDIA_LINKS.map((link, index) => (
                    <a key={index} href={link.href} target='_blank' rel='noopener noreferrer'>
                        {link.icon}
                    </a>
                ))}
                <img src={hero} alt="hero" className=' w-28' />
            </div>
            <div className='flex flex-col justify-center items-center'>
                <p className='mt-8 text-center tracking-tighter dark:text-neutral-950 text-slate-200'>&copy;EllisVelandia. All rights reserved</p>
                <img src={theme === "light" ? logo : LogoDark} alt="logo" />
            </div>
        </div>
    )
}
