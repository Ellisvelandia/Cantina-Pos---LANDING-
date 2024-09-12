import React, { useContext } from 'react'
import video from "../assets/hero.mp4"
import videoDark from "../assets/heroDark.mp4"
import logo from "../assets/logo.png"
import LogoDark from "../assets/LogoDark.png";
import { ThemeContext } from '../components/ThemeContext';
import hero from "../assets/hero.webp"
import { motion } from "framer-motion"

const HeroSection = () => {
    const { theme } = useContext(ThemeContext);
    return (
        <section className='relative flex h-screen items-center justify-center'>
            <div className={`absolute inset-0 -z-20 h-full overflow-hidden ${theme === "dark" ? "opacity-90 dark:z-0" : ""}`}>
                <video key={theme} src={theme === "light" ? videoDark : video} className='h-full w-full object-cover' muted autoPlay loop playsInline poster={hero}></video>
            </div>
            <div className='absolute  inset-0 -z-10 dark:z-0 bg-gradient-to-b from-transparent from-70% to to-black dark:bg-gradient-to-b dark:from-transparent dark:from-80% to dark:to-slate-200'></div>
            <div className='relative z-20 flex h-screen flex-col justify-end pb-20'>
                <motion.img initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 5.5 }}
                    src={theme === "light" ? logo : LogoDark} alt="logo" className='w-full p-4' />

            </div>
        </section>
    )
}

export default HeroSection