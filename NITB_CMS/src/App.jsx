import "bootstrap/dist/css/bootstrap.min.css";
import 'bootstrap/dist/js/bootstrap.bundle.min.js'


import './App.css'  


import Header from './components/Header';
import Sidebar from "./components/Sidebar";
import Main_Content from "./components/Main_Content";
import FileManager_Content from "./components/FileManager_Content";
import Settings_Content from "./components/Setting_Content";
import Footer from "./components/Footer";
import { useState } from "react";
import CustomHomePage_Content from "./components/CustomHomePage_Conten";
import Icons from "./components/Icons";

function App() {
  const [selectedTab, setSelectedTab] = useState("Dashboard");
  
  
  return (
    
    <>
    <Header></Header>
    <Sidebar selectedTab={selectedTab} setSelectedTab={setSelectedTab}></Sidebar>
    {selectedTab ==="Dashboard" ? ( 
    <Main_Content/>):selectedTab === "File Manager" ? (
    <FileManager_Content/>): selectedTab=== "Settings" ? (<Settings_Content/>): selectedTab==="Custom HomePage" ?(<CustomHomePage_Content />):selectedTab==="Icons"?(<Icons />) :(<Main_Content/>)
    }
    <Footer></Footer>


      
    </>
  )
}

export default App
