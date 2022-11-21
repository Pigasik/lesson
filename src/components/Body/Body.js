import styles from './Body.module.css';
import { useContext, useEffect, useRef, useState } from 'react';
import { ThemeContext } from '../../cotext/ThemeContext';
import { Sque } from '../Sque/Sque';


export const Body = () => {
    const {theme, setTheme} = useContext(ThemeContext);
    const [colors, setColors] = useState([]);
    const [themeColor, setThemeColor] = useState();
    const myInput = useRef();
    const randomColor = () => {
        return `rgb(${Math.floor(Math.random()*256)}, ${Math.floor(Math.random()*256)}, ${Math.floor(Math.random()*256)})`
    }
    
    useEffect(() => {
        setColors(createArrayColor())
    }, []);

    const randomNumber = (min, max) => {
        return Math.round(min - 0.5 + Math.random() * (max - min + 1));
      };

    const createArrayColor = () =>{
        const arr = [];
        for(let i = 0; i < 3; i++){
            arr.push(randomColor());            
        }
        return arr;
    }

    return <main className={`${styles.main} ${theme === 'black' ? styles.black : ''}`}>
        <button onClick={() => setTheme(prev => prev === 'white' ? 'black' : 'white')}>Swith</button>
        <p onClick={() => myInput.current.focus()}>{theme}</p>
        <input ref={myInput} type={'text'}></input>
        <div>
        <h1>{colors[randomNumber(0, 2)]}</h1>
        { colors.map((el) => <Sque key={el} color={el}/>)}
        {/* <Sque color={randomColor()}/>
        <Sque color={randomColor()}/>
        <Sque color={randomColor()}/> */}
        </div>
        
    </main>;
}