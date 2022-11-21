
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

 /* show && 
      /* <Button  title={'Name Last'} type={'primary'} click={clickHandler}/>
      <Button title={'Nika Vero'} type={'secondary'} click={clickHandler}/>
      <Title title={'Sign In'}/>
      <Tabs/> */
      /* <Input lable={'Name'} placeholder={'User Name'} change={changeHandler}/>
      <Input lable={'Email'} placeholder={'User Email'} change={changeHandler}/>
      <Counter/>
      <List/> */
      
      // <div><input type='text' placeholder='name' value={name} onChange={(e) => setName(e.target.value)}></input>
      // <input type='text' placeholder='email' value={email} onChange={(e) => setEmail(e.target.value)}></input>
      // <input type='password' placeholder='password' value={password} onChange={(e) => setPassword(e.target.value)}></input>
      // <button onClick={()=>setShow()}>Send</button>
      // </div>}
      // {!show && (
      //   <div>
      //     <p>Name: {name}</p>
      //     <p>Email: {email}</p>
      //     <p>Password: {password}</p>
      //   </div>
        
      //   )} */}
