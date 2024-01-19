import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import Layout from "./components/Layout";
import { BrowserRouter, Route, Routes} from "react-router-dom";
import Beauty from "./pages/Beauty";
function App() {
  return (
    <div>
      <BrowserRouter>
        <Layout/>
        <Routes>
        <Route path="/beauty" element={<Beauty/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
