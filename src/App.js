import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import { BrowserRouter, Route, Routes} from "react-router-dom";
import Menclothing from"./pages/Menclothing";
import Home from "./pages/Home";
import Profile from "./pages/Profile";
import Womenclothing from "./pages/Womenclothing";
import Kidsclothing from "./pages/Kidsclothing";
import Makeup from "./pages/Makeup";
function App() {
  return (
    <div>
      <BrowserRouter>
      
        <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/men/clothing" element={<Menclothing/>}/>
        <Route path="/women/clothing" element={<Womenclothing/>}/>
        <Route path="/Kids/clothing" element={<Kidsclothing/>}/>
        <Route path="/beauty/makeup" element={<Makeup/>}/>
        <Route path="/profile" element={<Profile/>}/>

        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
