import { BrowserRouter, Route, Router, Routes } from "react-router-dom";
import "./App.scss";
import Header from "./components/layouts/Header";
import Home from "./components/home/Home";
function App() {
  return (
    <BrowserRouter>
      <Header />
      <div className="App__container">
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
