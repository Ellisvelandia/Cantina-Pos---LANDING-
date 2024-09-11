import React from 'react'
import { FEATURES } from '../constants'
import FeaturesCard from './FeaturesCard'

export const Features = () => {
    return (
        <section className='container mx-auto py-16' id='features'>
            <h2 className='mb-8 text-center text-3xl tracking-tighter lg:text-4xl'> Our System</h2>
            <div
                className='grid grid-cols-1 gap-8 md:grid-cols-5'>
                {FEATURES.map((project, index) =>
                    <FeaturesCard key={index} project={project} />
                )}
            </div>
        </section>
    )
}
