import logo from "./logo.svg";
import "./App.scss";
import Carousel from "./components/utils/Carousel";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/assets/Header";

function App() {
  // const settings = {
  //   dots: true,
  //   infinite: true,
  //   autoplay: true,
  //   draggable: true,
  //   speed: 500,
  //   slidesToShow: 1,
  //   slidesToScroll: 1,
  //   slidesPerRow: 3,
  //   swipeToSlide: true,
  //   touchMove: true,
  //   arrows: true,
  // };
  return (
    <BrowserRouter>
      <Header />
      <Routes>{/* <Route path="" element={}/> */}</Routes>
    </BrowserRouter>
  );
  {
    /* <Carousel settings={settings} /> */
  }
}

export default App;
