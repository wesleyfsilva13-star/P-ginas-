import { Route, Routes } from "react-router-dom";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import Home from "./pages/home/Home";
import ListaProdutos from "./pages/listaProdutos/ListaProdutos";
import DetProduto from "./pages/detProduto/DetProduto";
import Login from "./pages/Login/Login";
import AdmProdutos from "./pages/admProdutos/AdmProdutos";

export default function App(){
    return(
        <>
        <Header/>
        <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/produtos" element={<ListaProdutos/>} />
            <Route path="/detalheProduto/:id" element={<DetProduto/>} />
            <Route path="/Login" element={<Login/>} />
            <Route path="/admProdutos" element={<AdmProdutos/>} />
            <Route path="*" element={<img className="container-notfound" src="https://azeen.com.br/images/404/not-found.gif"/>} />
        </Routes>
        <Footer/>
        </>

    )
}