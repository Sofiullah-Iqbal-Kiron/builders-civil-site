interface Props {
    icon: string,
    name: string
}

export function ServiceLink({icon, name}: Props) {
    return (
        <a href={`#${name}`} className='flex flex-col space-y-5 p-8 rounded-3xl bg-gradient-to-br from-blue-900 to-sky-700 text-white font-bold items-center'>
            <div>{icon}</div>
            <p>{name}</p>
        </a>
    )
}