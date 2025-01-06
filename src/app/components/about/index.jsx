import clsx from 'clsx'
import React from 'react'

const ItemLayout = ({ children, className }) => {
    return <div className={clsx('custom-bg p-8 rounded-xl flex items-center justify-center space-y-8', className)}>
        {children}
    </div>

}


const AboutDetails = () => {
    return (
        <section className='py-20 w-full'>
            <div className='grid grid-cols-12 gap-8 w-full'>

                <ItemLayout className={'col-span-8 row-span-2 flex-col items-start'}>
                    <h2 className='text-2xl text-left w-full capitalize'>
                        The Codemancer
                    </h2>

                    <p className='font-light w-full'>
                        I am someone curious by nature who likes to discover and learn new things, I like challenges, I am passionate about creating awesome stuff, technology is a great tool for this. My hobbies include music, reading, video games and chess ♞.
                    </p>
                </ItemLayout>

                <ItemLayout className={'col-span-4 text-accent'}>
                    <div className='font-semibold w-full text-left text-5xl'>
                        20+ <sub className='font-semibold text-base'>clients</sub>
                    </div>
                </ItemLayout>

                <ItemLayout className={'col-span-4 text-accent'}>
                    <div className='font-semibold w-full text-left text-5xl'>
                        6 <sub className='font-semibold text-base'>years of experience</sub>
                    </div>
                </ItemLayout>

                <ItemLayout className={"col-span-8 !p-0"}>
                    <img className='w-full h-auto' src='https://github-readme-stats.vercel.app/api?username=yaro-dev&theme=transparent&hide_border=true&title_color=FEFE58&text_color=ffffff&icon_color=FEFE58&text_bold=false' loading='lazy' alt='github-stats'></img>
                </ItemLayout>

                <ItemLayout className={"col-span-8 !p-0"}>
                    <img className='w-full h-auto' src='https://github-readme-stats.vercel.app/api?username=yaro-dev&theme=transparent&hide_border=true&title_color=FEFE58&text_color=ffffff&icon_color=FEFE58&text_bold=false' loading='lazy' alt='github-stats'></img>
                </ItemLayout>

            </div>
        </section>
    )
}

export default AboutDetails
