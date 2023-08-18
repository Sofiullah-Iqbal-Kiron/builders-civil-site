import {CivilPage} from "./pages/CivilPage";

import {BlankSpace} from "./components/common/BlankSpace";
import {Navbar} from "./components/common/Navbar";
import {TechnologyPage} from "./pages/TechnologyPage";
import {CompanyPage} from "./pages/CompanyPage";
import {SecurityPage} from "./pages/SecurityPage";
import {NoticePage} from "./pages/NoticePage";
import {ContactUsPage} from "./pages/ContactUsPage";
import {LoginPage} from "./pages/LoginPage";
import {Routes, Route} from "react-router-dom";

function App() {
    return (
        <div className='bg-gradient-to-r from-sky-100 to-sky-200 text-black'>
            <BlankSpace/>
            <Navbar/>

            <Routes>
                <Route path='/' element={<CivilPage/>}/>
                <Route path='civil' element={<CivilPage/>}/>
                <Route path='technology' element={<TechnologyPage/>}/>
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
