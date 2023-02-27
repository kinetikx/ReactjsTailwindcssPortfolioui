import logo from './logo.svg';
import './App.css';
import Personal from './Components/Personal/personal';
import Recentposts from './Components/Reccentposts/recentposts';
import FeaturedWorks from './Components/FeaturedWorks/featuredWorks';
import Footer from './Components/Footer/footer';

function App() {
  return (
    <div className="App  mx-auto ">
     <Personal/>
     <Recentposts/>
     <FeaturedWorks/>
     <Footer/>
    </div>

  );
}

export default App;
