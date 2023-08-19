import {CivilHomePage} from "./pages/civil_sub_part/CivilHomePage";

import {Navbar} from "./components/common/Navbar";
import {CompanyPage} from "./pages/civil_sub_part/CompanyPage";
import {SecurityPage} from "./pages/common/SecurityPage";
import {NoticePage} from "./pages/civil_sub_part/NoticePage";
import {ContactUsPage} from "./pages/common/ContactUsPage";
import {LoginPage} from "./pages/common/LoginPage";
import {Routes, Route} from "react-router-dom";
import {ArchitecturePage} from "./pages/civil_sub_part/ArchitecturePage";
import {CivilServicesPage} from "./pages/civil_sub_part/CivilServicesPage";

function App() {
    return (
        <div className='bg-gradient-to-r from-sky-100 to-sky-200 text-black'>
            <Navbar/>

            <Routes>
                <Route path='/' element={<CivilHomePage/>}/>
                <Route path='civil' element={<CivilHomePage/>}/>
                <Route path='architecture' element={<ArchitecturePage/>}/>
                <Route path='services' element={<CivilServicesPage/>}/>
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
