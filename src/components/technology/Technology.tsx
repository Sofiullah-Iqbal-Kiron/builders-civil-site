import {TechnologyCard} from "./TechnologyCard";

interface Props {
    title: string,
    technologies: Array<object>,
}

export function Technology({title, technologies}: Props) {
    return (
        <>
            <h1 className='text-3xl sm:text-5xl text-center font-semibold py-4 sm:py-5'>
                {title}
            </h1>
            <div className='flex flex-wrap justify-center gap-3 sm:gap-5'>
                {
                    technologies.map((technology, idx) =>
                        <TechnologyCard key={idx} technology={technology}/>)
                }
            </div>
        </>
    );
}