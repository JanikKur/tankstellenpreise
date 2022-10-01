import { useState } from "react";
import LoadingScreen from "./components/LoadingScreen";
import SearchForm from "./components/SearchForm";
import StationsList from "./components/StationsList";

export default function App() {
  
  const [stations, setStations] = useState([]);
  const [loading, setLoading] = useState(false);

  return(
    <div id="App">
      <SearchForm setStations={setStations} setLoading={setLoading}/>
      {loading ? <LoadingScreen/> : <StationsList stations={stations}/>}
    </div>
  )
}

