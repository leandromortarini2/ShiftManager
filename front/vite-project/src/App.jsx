/* eslint-disable no-unused-vars */
import "./App.css";
import NavBar from "./components/NavBar/NavBar";
import Login from "./views/Login/Login";
import Home from "./views/Home/Home";
import MisTurnos from "./views/Mis Turnos/MisTurnos";
import Register from "./views/Register/Register";
import { Route, Routes } from "react-router-dom";
import Servicios from "./views/Servicios/Servicios";
import Contacto from "./views/Contacto/Contacto";
import { useSelector } from "react-redux";
import TurnsFrom from "./views/TurnsForm/TurnsForm";
import Footer from "./components/Footer/Footer";
function App() {
  const userLogin = useSelector((state) => state.actualUser.userData.login);
  console.log("==============>", userLogin);
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/Register" element={<Register />}></Route>
        <Route path="/servicios" element={<Servicios />}></Route>
        <Route
          path="/TurnsForm"
          element={userLogin ? <TurnsFrom /> : <Login />}
        ></Route>{" "}
        <Route path="/Contact" element={<Contacto />}></Route>
        <Route path="/Login" element={<Login />}></Route>
        <Route
          path="/MisTurnos"
          element={userLogin ? <MisTurnos /> : <Login />}
        ></Route>
      </Routes>
      <Footer />
    </>
  );
}

export default App;
