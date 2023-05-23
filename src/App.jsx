import { Route, Routes, useNavigate } from "react-router-dom";
import Glavniy from "./Glavniy";
import Asosiy from "./pages/Asosiy/Asosiy";
import Video from "./pages/Video/Video";
import Shorts from "./pages/Shorts/Shorts";
import Playlist from "./pages/Playlist/Playlist";
import Xabarlar from "./pages/Xabarlar/Xabarlar";
import Kanal from "./pages/Kanal/Kanal";
import KanalHaqida from "./pages/KanalHaqida/KanalHaqida";
import EachVideo from "./pages/EachVideo/EachVideo";
import Hero from "./pages/Hero/Hero";
import About from "./pages/About/About";
import Obunalar from "./pages/Obunalar/Obunalar";
import Kutubxona from "./pages/Kutubxona/Kutubxona";
import Login from "./pages/Login/Login";
import { useEffect } from "react";


const App = () => {
  const navigate = useNavigate();
  useEffect(() => {
    if(JSON.parse(localStorage.getItem("token"))?.token){
      navigate("/");
    }else{
      navigate("/login");
    }
  }, []);
  return (
    <>
      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/login" element={<Login />} />
        <Route path="about" element={<About />} />
        <Route path="kutubxona" element={<Kutubxona />} />
        <Route path="obunalar" element={<Obunalar />} />
        <Route path="glavniy" element={<Glavniy />}>
          <Route path="glavniy" element={<Asosiy />} />
          <Route path="video" element={<Video />} />
          <Route path="shorts" element={<Shorts />} />
          <Route path="playlist" element={<Playlist />} />
          <Route path="Xabarlar" element={<Xabarlar />} />
          <Route path="kanal" element={<Kanal />} />
          <Route path="kanalhaqida" element={<KanalHaqida />} />
        </Route>
        <Route path="videolar/:id" element={<EachVideo />} />
      </Routes>
    </>
  );
};
export default App;
