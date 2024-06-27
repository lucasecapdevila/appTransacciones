import { BrowserRouter, Route, Routes } from "react-router-dom";
import ListaTransacciones from "../pages/ListaTransacciones";
import Buscador from "../pages/Buscador";
import Resumen from "../pages/Resumen";
import Home from "../pages/Home";

const AppRouter = () => {
    return (
       <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>}></Route>
          <Route path="/lista" element={<ListaTransacciones />}></Route>
          <Route path="/buscador" element={<Buscador />}></Route>
          <Route path="/resumen" element={<Resumen />}></Route>
        </Routes>
       </BrowserRouter>
    );
};

export default AppRouter;