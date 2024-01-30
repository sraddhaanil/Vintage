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
import AddToCart from './pages/AddToCart';
import Search from "./pages/Search";


function App() {

  return (
    <div className="App">
      <BrowserRouter>
      
        <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/men" element={<Men />}/>
        <Route path="/women" element={<Women />}/>
        <Route path="/Kids" element={<Kids />}/>
        <Route path="/beauty" element={<Beauty />}/>
        <Route path="/profile" element={<Profile />}/>
        <Route path="/wishlist" element={<Wishlist />}/>
        <Route path="/cart" element={<AddToCart />}/>
        <Route path="/search" element={<Search />}/>
        
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
