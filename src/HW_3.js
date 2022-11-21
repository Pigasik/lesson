
import './App.css';
import {Header} from './components/Header/Header';
import {Body} from './components/Body/Body';
import {Footer} from './components/Footer/Footer';
import ThemeProvader from './cotext/ThemeContext';


function HW_3() {

  return (
    <div className="App">
      <ThemeProvader>
        <Header/>
        <Body/>
        <Footer/>
      </ThemeProvader>      
    </div>

  );
}

export default HW_3;
