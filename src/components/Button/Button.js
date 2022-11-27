import styles from './Button.module.css';
import {useRef, useState} from 'react';

export const Button = () => {
    const [top, setTop] = useState();
    const [left, setLeft] = useState();
    const [absolute, setAbsolute] = useState(false);
    const appRef = useRef();

    const handleMouseEnter = () => {
        const width = appRef.current.clientWidth;
        const height = appRef.current.clientHeight;
        setAbsolute(true);
        setTop(random(height));
        setLeft(random(width));
    };

    const random = (int) => Math.floor(Math.random() * int);


  return (
    <div className={styles.App}>
      <h1>Вы довольны своей зп?</h1>
      <div className={styles.wrap}>
        <button onClick={() => alert('Я так и знал')}>Yes</button>
        <button style={{
          position: absolute ? 'absolute' : 'none',
          top,
          left,
          }} className={styles.no} onMouseMove={handleMouseEnter}>No</button>
      </div>
    </div>
  );
};