
import './App.css';
// import  {Button}  from './components/Button/Button';
// import  {Title}  from './components/Title/Title';
// import  {Tabs}  from './components/Tabs/Tabs';
 import  {Input}  from './components/Input/Input';
 import { Counter } from './components/Counter/Counter';
 import { List } from './components/List/List';

function App() {
  // const clickHandler =() => {
  //   console.log(Math.random());
  // };
   const changeHandler =(val) => {
      console.log(val);
     };
     
  return (
    <div className="App">
      {/* <Button  title={'Name Last'} type={'primary'} click={clickHandler}/>
      <Button title={'Nika Vero'} type={'secondary'} click={clickHandler}/>
      <Title title={'Sign In'}/>
      <Tabs/> */}
      <Input lable={'Name'} placeholder={'User Name'} change={changeHandler}/>
      <Input lable={'Email'} placeholder={'User Email'} change={changeHandler}/>
      <Counter/>
      <List/>
    </div>
  );
}

export default App;
