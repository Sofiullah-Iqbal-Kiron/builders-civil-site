import {CivilPage} from "./pages/CivilPage";

import {Navbar} from "./components/common/Navbar";
import {ArchitecturePage} from "./pages/ArchitecturePage";
import {CompanyPage} from "./pages/CompanyPage";
import {SecurityPage} from "./pages/SecurityPage";
import {NoticePage} from "./pages/NoticePage";
import {ContactUsPage} from "./pages/ContactUsPage";
import {LoginPage} from "./pages/LoginPage";
import {Routes, Route} from "react-router-dom";

function App() {
    return (
        <div className='bg-gradient-to-r from-sky-100 to-sky-200 text-black'>
            <Navbar/>

            <Routes>
                <Route path='/' element={<CivilPage/>}/>
                <Route path='civil' element={<CivilPage/>}/>
                <Route path='technology' element={<ArchitecturePage/>}/>
                <Route path='company' element={<CompanyPage/>}/>
                <Route path='security' element={<SecurityPage/>}/>
                <Route path='notice' element={<NoticePage/>}/>
                <Route path='contact-us' element={<ContactUsPage/>}/>
                <Route path='login' element={<LoginPage/>}/>
            </Routes>
        </div>
    )
}

export default App
