import img1 from '../assets/img-1.png'
import img2 from '../assets/img-2.png'

export function WhyChooseUs() {
    return (
        <section className='flex flex-col space-y-8 max-h-screen'>
            <h1 className='text-5xl font-bold text-center pb-10'>
                Why Choose Us
            </h1>
            <div className='flex justify-around items-center'>
                <img src={img1} alt='image-1' width={180} height={100} className='rounded-2xl ring-2 ring-offset-1'/>
                <p className='font-mono w-96 font-thin tracking-wide text-lg'>
                    We combine extensive expertise in structural engineering with a proven track record of delivering
                    innovative and cost-effective solutions that prioritize safety and sustainability.
                </p>
            </div>
            <div className='flex justify-around items-center'>
                <p className='font-mono w-96 font-thin tracking-wide text-lg'>
                    And also ensuring the successful completion of your project. We love our clients requirement.
                </p>
                <img src={img2} alt='image-2' width={250} height={200} className='rounded-2xl ring-2 ring-offset-1'/>
            </div>
        </section>
    )
}