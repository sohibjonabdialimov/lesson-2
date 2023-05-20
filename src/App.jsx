import { Route, Routes } from "react-router-dom";
import Glavniy from "./Glavniy";
import Asosiy from "./pages/Asosiy/Asosiy";
import Video from "./pages/Video/Video";
import Shorts from "./pages/Shorts/Shorts";
import Playlist from "./pages/Playlist/Playlist";
import Xabarlar from "./pages/Xabarlar/Xabarlar";
import Kanal from "./pages/Kanal/Kanal";
import KanalHaqida from "./pages/KanalHaqida/KanalHaqida";
const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Glavniy />}>
          <Route index element={<Asosiy />} />
          <Route path="video" element={<Video />} />
          <Route path="shorts" element={<Shorts />} />
          <Route path="playlist" element={<Playlist />} />
          <Route path="Xabarlar" element={<Xabarlar />} />
          <Route path="kanal" element={<Kanal />} />
          <Route path="kanalhaqida" element={<KanalHaqida />} />
        </Route>
      </Routes>
    </>
  );
};
export default App;
