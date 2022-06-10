import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./Pages/Home/Home";
import Electool from "./Pages/Projects/Electool";
import Footer from "./Pages/Shared/Footer";
import Header from "./Pages/Shared/Header";

function App() {
  return (
    <div className="bg-base-300">
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/electool" element={<Electool></Electool>}></Route>
        <Route path="*"></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
