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
import AllRequestProperty from "./ServisesRequest/AllRequest/AllRequestProperty/index";
import GenerateInvoiceProperty from "./ServisesRequest/GenerateInvoice/GenerateInvoiceProperty/index";
import CreateChargesCatalouge from "./ServisesRequest/ChargesCatalogue/CreateChargesCatalouge/index";
import EditCatalouge from "./ServisesRequest/ChargesCatalogue/EditChargesCatalouge/index";
import ChargesCatalouge from "./ServisesRequest/ChargesCatalogue/ChargesCatalouge/index";
import AllInvoice from "./Payment/AllInvoice/index";
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
                <Route
                    path="/allrequestproperty"
                    element={<AllRequestProperty />}
                ></Route>
                <Route
                    path="generateinvoiceproperty"
                    element={<GenerateInvoiceProperty />}
                ></Route>
                <Route
                    path="/createchargescatalouge"
                    element={<CreateChargesCatalouge />}
                ></Route>
                <Route
                    path="/editchargescatalouge"
                    element={<EditCatalouge />}
                ></Route>
                <Route
                    path="/chargescatalouge"
                    element={<ChargesCatalouge />}
                ></Route>
                <Route path="/allinvoice" element={<AllInvoice />}></Route>
            </Routes>
        </BrowserRouter>
    );
}

export default App;
