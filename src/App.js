import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import { BrowserRouter, Route, Routes} from "react-router-dom";
import Beauty from "./pages/Beauty";
import Men from"./pages/Men";
import Home from "./pages/Home";
import Women from "./pages/Women";
import Kids from "./pages/Kids";
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
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
