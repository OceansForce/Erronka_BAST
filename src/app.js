import Header from './header-footer/header';
import Body from './body/body.js';
import './index.css';
import './body/css.css';


function App() {
  return (
    <>
      <div className="App container">
        <Header /> 
      </div>
      <div  className="App container justify-center items-center">
        <Body />
      </div>
    </>
    
  );
}
export default App;