interface Props {
    icon: any,
    name: string
}

export function ServiceLink({icon, name}: Props) {
    return (
        <a href={`#${name}`}
           className='flex flex-col justify-evenly items-center h-[10rem] w-[10rem] rounded-xl ring-1 ring-sky-800 bg-gradient-to-br from-sky-400 to-sky-200 text-gray-800 font-bold hover:from-sky-500 hover:to-sky-300 hover:scale-105 transition-all'>
            <div className='text-5xl'>{icon}</div>
            <p>{name}</p>
        </a>
    )
}