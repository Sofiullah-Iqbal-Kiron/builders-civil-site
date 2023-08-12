import bg from '../assets/last_message_bg.png';

export function LastMessage() {
    return (
        <section className='flex flex-col space-y-10 items-center'>
            <p className='text-4xl sm:text-5xl text-center'>
                You can make a different today!
            </p>
            <p className='text-md sm:text-xl'>
                Theres a lot more we can do, together.
            </p>
            <button
                className='bg-green-500 font-semibold rounded px-4 py-3 hover:bg-green-800 hover:text-white hover:scale-105 transition-all duration-200'>
                SIGN UP NOW
            </button>
        </section>
    )
}