import { BrowserRouter, Route, Router, Routes } from "react-router-dom";
import "./App.scss";
import Header from "./components/layouts/Header";
import Nav from "./components/layouts/Nav";

function App() {
  return (
    <BrowserRouter>
      <Header />
      {/* <Nav /> */}
      <div className="App__container">
        <Routes>{/* <Route path="/" element={<Header />} /> */}</Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
