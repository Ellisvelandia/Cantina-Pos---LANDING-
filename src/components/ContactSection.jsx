import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import toast, { Toaster } from 'react-hot-toast';

export const ContactSection = () => {
    const form = useRef();
    const [isSubmitting, setIsSubmitting] = useState(false);

    const sendEmail = async (e) => {
        e.preventDefault();

        if (isSubmitting) return;

        setIsSubmitting(true);

        try {
            await emailjs.sendForm('service_o0mbn89', 'template_7h2drhp', form.current, import.meta.env.VITE_EMAILJS_USER_ID);
            toast.success('Message sent successfully');
            form.current.reset();
        } catch (error) {
            console.error('Error:', error);
            toast.error('Error occurred while sending the message');
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <section className='container mx-auto py-16' id='contact'>
            <Toaster />
            <h2 className='mb-8 text-center text-3xl lg:text-4xl'>Contact Us</h2>
            <form ref={form} onSubmit={sendEmail} className='mx-auto max-w-2xl rounded-3xl bg-neutral-900 p-8 shadow-2xl'>
                <h3 className='mb-6 text-2xl font-bold tracking-tighter'>Get in touch</h3>
                <div className='grid grid-cols-1 gap-4 md:grid-cols-2'>
                    <input type="text" name="name" placeholder='Name' className='rounded-lg border-2 p-2 bg-neutral-800 focus:outline-none' required />
                    <input type="email" name="email" placeholder='Email' className='rounded-lg border-2 p-2 bg-neutral-800 focus:outline-none' required />
                    <textarea name="message" placeholder='Message' className='rounded-lg border-2 p-2 bg-neutral-800 focus:outline-none md:col-span-2' required />
                </div>
                <button type='submit' className='mt-4 rounded-lg bg-rose-500 px-4 py-2 font-bold text-white transition hover:bg-rose-600' disabled={isSubmitting}>
                    {isSubmitting ? 'Sending...' : 'Send'}
                </button>
            </form>
        </section>
    );
};
