import react from "react";
import './App.css';
import Header from "./Components/Header/Header";
import NavBar from "./Components/NavBar/NavBar";
import RunningText from "./Components/RunningText/RunningText";
import ExplainSection from "./Components/ExplainSection/ExplainSection";
import MarketplaceSection from "./Components/MarketplaceSection/MarketplaceSection";

function App() {
  return (
    <div className="App">
        <NavBar/>
        <Header/>
        <RunningText/>
        <ExplainSection/>
        <MarketplaceSection/>
    </div>
  );
}

export default App;
