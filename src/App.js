import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import { BrowserRouter, Route, Routes} from "react-router-dom";
import Beauty from "./pages/Beauty";
function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
        <Route path="/beauty" element={<Beauty />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
