import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AllProperties from "./AllProperties/index";
import Units from "./Units";
import PropertyName from "./PropertyName";
import User from "./User";
import AddUser from "./AddUser";
import VisitorManagement from "./VisitorManagement";
import AddNewProperty from "./AllProperties/AddNewProperty";
import EditProperty from "./EditProperty/EditProperty";
import EditUnitDetail from "./EditUnitDetail.js";
import UnitDetail from "./UnitDetail";
import EditUserDetail from "./EditUserDetail";
import UserDetail from "./UserDetail";
import Aminities from "./Aminities";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<AllProperties />}></Route>
        <Route path="/units" element={<Units />}></Route>
        <Route path="/unitdetail" element={<UnitDetail />}></Route>
        <Route path="/editunitdetail" element={<EditUnitDetail />}></Route>
        <Route path="/property" element={<PropertyName />}></Route>
        <Route path="/addnewproperty" element={<AddNewProperty />}></Route>
        <Route path="/editproperty" element={<EditProperty />}></Route>
        <Route path="/user" element={<User />}></Route>
        <Route path="/adduser" element={<AddUser />}></Route>
        <Route path="/userdetail" element={<UserDetail />}></Route>
        <Route path="/edituserdetail" element={<EditUserDetail />}></Route>
        <Route path="/aminities" element={<Aminities />}></Route>
        <Route path="/visitor" element={<VisitorManagement />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
