import logo from "./logo.svg";
import "./App.css";
import Carousel from "./components/utils/Carousel";

function App() {
  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    draggable: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    slidesPerRow: 3,
    swipeToSlide: true,
    touchMove: true,
    arrows: true,
  };
  return (
    <div className="App">
      <Carousel settings={settings} />
    </div>
  );
}

export default App;
