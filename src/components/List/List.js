import {useState, useEffect} from 'react';

const myList = ['first', 'second', 'thrid', 'fourth']

export const List = () => {
    const [list, setList] = useState(myList);
    
    useEffect(()=>{
        console.log('Ваш массив', list);
    },[list]) // если пусто то выз 1 раз,

    const deleteLi = (e) => {
        const text = e.target.innerText;

        // const index = list.indexOf(text); гг
        // const myArr = [...list];
        // myArr.splice(index, 1);
       
        
        setList(prev => prev.filter(el => el !== text));
    }
    
    return <ul>
        {list.map((el)=>(<li key={el} onClick={deleteLi}>{el}</li>))}</ul>
}