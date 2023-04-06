import  {Routes, Route, HashRouter } from "react-router-dom";
import Home from "./Home";
import AnimeDetail from "./components/AnimeDetail.jsx";

function App() {
  return (
    <HashRouter>
      <>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/anime/:category" element={<AnimeDetail />} />
      </Routes>
      </>
    </HashRouter>
  );
}

export default App;