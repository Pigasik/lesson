import { useState } from 'react';
import styles from './Input.module.css';

export const Input = (props) => {
    const {lable, placeholder, change} = props;
    const [value, setValue] = useState('');
    const [show, setShow] = useState(true);

    const inputHandler = (e) =>{
        setValue(e.target.value);
        if (value.length > 8){
            setShow(false);
        }
        change(value);
    }
    return(
        show && <div className={styles.wrapper}>
            <label htmlFor={lable} className={styles.label}>{lable}</label>
            <input value={value} className={styles.input} onChange={inputHandler} type="text" id={lable} placeholder={placeholder}></input>
            <span className={styles.hint}>Whatch this!</span>
        </div>
    );
}