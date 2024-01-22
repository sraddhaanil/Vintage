import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import { BrowserRouter, Route, Routes} from "react-router-dom";
import Men from"./pages/Men";
import Home from "./pages/Home";
import Profile from "./pages/Profile";
import Women from "./pages/Women";
import Kids from "./pages/Kids";
import Beauty from "./pages/Beauty";
import Wishlist from "./pages/Wishlist";
import AddtoCart from "./pages/Addtocart";

function App() {
  return (
    <div>
      <BrowserRouter>
      
        <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/men" element={<Men/>}/>
        <Route path="/women" element={<Women/>}/>
        <Route path="/Kids" element={<Kids/>}/>
        <Route path="/beauty" element={<Beauty/>}/>
        <Route path="/profile" element={<Profile/>}/>
        <Route path="/wishlist" element={<Wishlist/>}/>
        <Route path="/cart" element={<AddtoCart/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
