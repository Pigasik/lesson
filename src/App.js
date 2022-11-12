
import './App.css';
import  {Button}  from './components/Button/Button';
import  {Title}  from './components/Title/Title';
import  {Tabs}  from './components/Tabs/Tabs';

function App() {
  const clickHandler =() => {
    console.log(Math.random());
  };

  return (
    <div className="App">
      <Button  title={'Name Last'} type={'primary'} click={clickHandler}/>
      <Button title={'Nika Vero'} type={'secondary'} click={clickHandler}/>
      <Title title={'Sign In'}/>
      <Tabs/>
    </div>
  );
}

export default App;
