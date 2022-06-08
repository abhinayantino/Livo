import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AllProperties from "./AllProperties/index";
import Units from "./Units";
import PropertyName from "./PropertyName";
import User from "./User";
import AddUser from "./AddUser";
import VisitorManagement from "./VisitorManagement";
import AllPosts from "./communityNotices/AllPost/index";
function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<AllProperties />}></Route>
                <Route path="/units" element={<Units />}></Route>
                <Route path="/property" element={<PropertyName />}></Route>
                <Route path="/user" element={<User />}></Route>
                <Route path="/adduser" element={<AddUser />}></Route>
                <Route path="/visitor" element={<VisitorManagement />}></Route>
                <Route path="/allposts" element={<AllPosts />}></Route>
            </Routes>
        </BrowserRouter>
    );
}

export default App;
