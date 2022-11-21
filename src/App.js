
import './App.css';
import {Route, Routes} from 'react-router-dom'
import Navbar from './components/Navbar/Navbar'
import Meals from './components/Meals/Meals';
import Meal from './components/Meal/Meal';



function App() {


  return (
    <div>
      {/* <Link to={'/'}>Main</Link><br/>
      <Link to={'/about'}>About</Link> */}
      <Navbar/>
      {/* <a href="/">Main</a>
      <a href="/about">About</a> */}
      <Routes>
        <Route path="/" element={<Meals/>}/>
        <Route path="/meal" element={<Meal/>}/>
        <Route path="/meal/:id" element={<Meal/>}/>
      </Routes>
           
    </div>
  );
}

export default App;
