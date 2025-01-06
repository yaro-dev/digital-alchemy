import Link from 'next/link'
import React from 'react'

const ProjectLayout = ({ name, description, date, demoLink }) => {
    return (

        <Link
            href={demoLink}
            target={"_blank"}
            className='cursor-pointer flex items-center justify-between w-full relative overflow-hidden p-6 rounded-lg custom-bg'>
            <div className='flex items-center justify-center space-x-2'>
                <h2 className='text-foreground'>{name}</h2>
                <p className='text-muted'>{description}</p>
            </div>

            <div className='self-end flex-1 mx-2 mb-1 bg-transparent border border-b border-dashed border-muted'></div>

            <p className='text-foreground sm-font-tech'>
                {date}
            </p>
        </Link>

    )
}

export default ProjectLayout
