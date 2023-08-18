import {TechnologyCard} from "./TechnologyCard";
import {SectionTitle} from "../common/SectionTitle";

interface Props {
    title: string,
    technologies: Array<object>,
}

export function Technology({title, technologies}: Props) {
    return (
        <>
            <SectionTitle text={title}/>
            <div className='flex flex-wrap justify-center gap-3 sm:gap-5'>
                {
                    technologies.map((technology, idx) =>
                        <TechnologyCard key={idx} technology={technology}/>)
                }
            </div>
        </>
    );
}