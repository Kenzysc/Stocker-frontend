import { Outlet } from "react-router";
import "./App.css";
import Navbar from "./Components/Navbar/Navbar";

function App() {
  return <>
  <Navbar />
  {/* outlet is where all the pages are going 2b displayed */}
  <Outlet /> 
  </>;
}

export default App;
