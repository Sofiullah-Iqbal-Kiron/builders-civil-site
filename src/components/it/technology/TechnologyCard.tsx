interface Props {
    technology: any
}

export function TechnologyCard({technology}: Props) {
    return (
        <div className='h-[8.5rem] sm:h-[9rem] w-[10rem] sm:w-[12rem] flex flex-col justify-center items-center space-y-2 bg-gray-50 sm:bg-white rounded-2xl'>
            <p className='text-2xl sm:text-4xl'>{technology.icon}</p>
            <p className='font-serif'>{technology.name}</p>
        </div>
    )
}