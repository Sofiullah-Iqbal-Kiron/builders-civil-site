import {SectionTitle} from "../components/common/SectionTitle";
import {Footer} from "../components/common/Footer";
import {FaDownload} from "react-icons/fa6";

const noticeData = [
    {
        sl: 1,
        title: "Important Notice",
        uploadDate: "2023-08-15",
        downloadLink: "#",
    },
    {
        sl: 2,
        title: "Upcoming Event",
        uploadDate: "2023-08-20",
        downloadLink: "#",
    },
    {
        sl: 3,
        title: "Holiday Closure",
        uploadDate: "2023-08-25",
        downloadLink: "#",
    },
    {
        sl: 4,
        title: "New Policy Update",
        uploadDate: "2023-08-28",
        downloadLink: "#",
    },
    {
        sl: 5,
        title: "Product Launch",
        uploadDate: "2023-09-05",
        downloadLink: "#",
    },
    {
        sl: 6,
        title: "Maintenance Schedule",
        uploadDate: "2023-09-10",
        downloadLink: "#",
    },
    {
        sl: 7,
        title: "Training Workshop",
        uploadDate: "2023-09-15",
        downloadLink: "#",
    },
    {
        sl: 8,
        title: "System Upgrade",
        uploadDate: "2023-09-20",
        downloadLink: "#",
    },
    {
        sl: 9,
        title: "Call for Volunteers",
        uploadDate: "2023-09-25",
        downloadLink: "#",
    },
    {
        sl: 10,
        title: "Annual General Meeting",
        uploadDate: "2023-09-30",
        downloadLink: "#",
    },
];

export function NoticePage() {
    const reversedNoticeData = [...noticeData].reverse();

    return (
        <section className='pt-[3.5rem]'>
            <SectionTitle text='Notice Board'/>

            <div className='flex justify-center w-full overflow-x-auto'>
                <table className='text-center w-full'>
                    <thead>
                    <tr className='h-[4.5rem] bg-blue-900 text-white font-raleway-500'>
                        <th className='w-[8rem]'>Serial</th>
                        <th className='w-[16rem]'>Title</th>
                        <th className='w-[16rem]'>Upload Date</th>
                        <th className='w-[2rem]'>Download</th>
                    </tr>
                    </thead>

                    <tbody>
                    {
                        reversedNoticeData.map((data, idx) =>
                            <tr key={idx} className='h-[3.5rem] hover:bg-slate-400 transition-colors duration-300'>
                                <td>{data.sl}</td>
                                <td>{data.title}</td>
                                <td>{data.uploadDate}</td>
                                <td>
                                    <a href={data.downloadLink} className='btn btn-primary btn-circle text-xl'><FaDownload/></a>
                                </td>
                            </tr>)
                    }
                    </tbody>
                </table>
            </div>
            <div className='py-10'/>
            <Footer/>
        </section>
    )
}