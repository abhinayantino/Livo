import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AllProperties from "./AllProperties/index";
import Units from "./Units";
import PropertyName from "./PropertyName";
import User from "./User";
import AddUser from "./AddUser";
import VisitorManagement from "./VisitorManagement";
import AllPosts from "./communityNotices/AllPost/index";
import ReportedPostMain from "./communityNotices/ReportedPost/index";
import CreateAnnouncement from "./communityNotices/CreateAnnouncement/index";
import CreateEvent from "./communityNotices/CreateEvent/index";
import AllRequest from "./ServisesRequest/AllRequest/index";
import GenerateInvoice from "./ServisesRequest/GenerateInvoice/index";
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
                <Route
                    path="/reportedpost"
                    element={<ReportedPostMain />}
                ></Route>
                <Route
                    path="/createannouncement"
                    element={<CreateAnnouncement />}
                ></Route>
                <Route path="/createvent" element={<CreateEvent />}></Route>
                <Route path="/allrequest" element={<AllRequest />}></Route>
                <Route
                    path="/generateinvoice"
                    element={<GenerateInvoice />}
                ></Route>
            </Routes>
        </BrowserRouter>
    );
}

export default App;
