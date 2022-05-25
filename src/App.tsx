import './App.scss';
import FeaturedContent from './components/FeaturedContent';
import NavBar from './components/NavBar';

function App() {

  return (
    <div className="container mt-2 mb-2 ">
      <NavBar />
      <FeaturedContent/>
    </div>
  )
}

export default App;