import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../../pages/Home";
import Login from "../../pages/Login";
import Dashboard from "../../pages/Dashboard";

const Paths = () => {
    return ( 
    
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home/>} />
                <Route path="/login" element={<Login/>} />
                <Route path="/dashboard" element={<Dashboard/>} />
                <Route path="*" element={
                    <>
                        <h1>PAGINA NÃO ENCONTRADA</h1>
                        <a href="/" >Voltar</a>
                    </>
                } />
            </Routes>
        </BrowserRouter>
     );
}
 
export default Paths;