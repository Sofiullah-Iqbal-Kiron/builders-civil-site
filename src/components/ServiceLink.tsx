interface Props {
    icon: string,
    name: string
}

export function ServiceLink({icon, name}: Props) {
    return (
        <a href={`#${name}`} className='flex flex-col items-center justify-around p-8 rounded-3xl bg-gradient-to-br from-sky-500 to-sky-300 text-gray-800 font-bold'>
            <div>{icon}</div>
            <p>{name}</p>
        </a>
    )
}