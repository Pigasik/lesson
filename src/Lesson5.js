
import './App.css';
//import {Button} from './components/Button/Button';
import store from './redux/store';
import {useRef, useState} from 'react';


function Lesson5() {
// console.log(store);
// const increase = () => {
//   store.dispatch({type: 'INCREASE', payload: {}})
//   console.log(store.getState());
// }

// const decrease = () => {
//   store.dispatch({type: 'DECREASE'})
//   console.log(store.getState());
// }
 
const [tasks, setTasks] = useState(store.getState());
const inputRef = useRef();
const allTask = useRef();

    const clickHandler = () =>  {
        const task = {
            text: inputRef.current.value,
            done: false,
        };
        inputRef.current.value = '';
        store.dispatch({
            type: 'ADD_TASK',
            task,
        })
        console.log(store.getState());
    };
store.subscribe(() => {
  setTasks(store.getState());
});
const doneHandler = (task) =>{
  allTask.current = store.getState();
  store.dispatch({
    type: "DONE_TASK",
    id: task.id
  })
}
const showDone = () => {
  store.dispatch({
    type: 'SHOW_TYPE',
  })
}

const showALL = () => {
  allTask.current =
  store.dispatch({
    type: 'SHOW_ALL',
  })
}

return(
    
    <div>
      {/* <Button /> */}
            <input type="text" ref={inputRef}></input>
            <button onClick = {clickHandler}>Add</button>
            <button onClick={showDone}>Done Task</button>
            <button onClick={showALL}>All Task</button>
            {tasks.map((task) => 
            (<p onClick={() => doneHandler(task)} key={task.id} style={{color: task.done ? 'red' : ''}}>{task.text}</p>))}  
    </div>)
  
}

export default Lesson5;
