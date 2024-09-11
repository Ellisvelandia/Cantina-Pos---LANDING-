import React from 'react'
import { SOCIAL_MEDIA_LINKS } from '../constants'
import logo from "../assets/logo.png"
import hero from "../assets/hero.png"

export const Footer = () => {
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
                <p className='mt-8 text-center tracking-tighter text-neutral-500'>&copy;EllisVelandia. All rights reserved</p>
                <img src={logo} alt="logo" />
            </div>
        </div>
    )
}
