
import './App.css';
//import {useState} from 'react';
import {Header} from './components/Header/Header';
import {Body} from './components/Body/Body';
import {Footer} from './components/Footer/Footer';
import ThemeProvader from './cotext/ThemeContext';
// import  {Button}  from './components/Button/Button';
// import  {Title}  from './components/Title/Title';
// import  {Tabs}  from './components/Tabs/Tabs';
 //import  {Input}  from './components/Input/Input';
 //import { Counter } from './components/Counter/Counter';
 //import { List } from './components/List/List';

function App() {
  // const clickHandler =() => {
  //   console.log(Math.random());
  // };
  //  const changeHandler =(val) => {
  //     console.log(val);
  //    };
  //    const [name, setName] = useState('');
  //    const [email, setEmail] = useState('');
  //    const [password, setPassword] = useState('');
  //    const [show, setShow] = useState(true);
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

export default App;
