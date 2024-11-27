import Header from './header-footer/header';
import Body from './body/body.js';
import Footer from './header-footer/footer';
import './index.css';
import './body/css.css';
import "./body/Carousel.css"; 

function App() {
  return (
    <>
      <div className="App">
        <Header />
      </div>

      <div  className="App container">
        <Body />
      </div>
      <div className="App">
        <Footer />
      </div>
    </>
  );
}

export default App;
