import "./App.css";
import TopNav from "./components/topNav";
import LeftNav from "./components/leftNav";
import AllProperties from "./views/AllProperties";
function App() {
  return (
    <>
      <TopNav />
      <div style={{ display: "flex", background: "#FFE3D2" }}>
        <LeftNav />
        <AllProperties></AllProperties>
      </div>
    </>
  );
}

export default App;
