import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AllProperties from "./AllProperties/index";
import Units from "./Units";
import PropertyName from "./PropertyName";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<AllProperties />}></Route>
        <Route path="/units" element={<Units />}></Route>
        <Route path="/property" element={<PropertyName />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
