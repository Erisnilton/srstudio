import "./App.scss";
import FeaturedContent from "./components/FeaturedContent";
import Footer from "./components/Footer";
import NavBar from "./components/NavBar";

function App() {
  return (
    <>
      <div className="container mt-2 mb-2 ">
        <NavBar />
        <FeaturedContent />
      </div>
      <Footer />
    </>
  );
}

export default App;
