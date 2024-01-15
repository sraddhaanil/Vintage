import "./App.css";

import "../node_modules/bootstrap/dist/css/bootstrap.css";

import Layout from "./components/Layout";
import { BrowserRouter} from "react-router-dom";
// import Home from "./Pages/Home";
// import AddEmployee from "./Pages/AddEmployee";
// import ViewEmployee from "./Pages/ViewEmployee";
function App() {
  return (
    <div>
      <BrowserRouter>
        <Layout/>
        
      </BrowserRouter>
    </div>
  );
}

export default App;
