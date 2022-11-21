import {useState} from 'react';
import styles from './Form.module.css';

export const Form = () => {
     
     const [name, setName] = useState('');
     const [email, setEmail] = useState('');
     const [password, setPassword] = useState('');
     const [show, setShow] = useState(true);
     const inputName = (e) =>{
      setName(e.target.value);
     }
     const inputEmail = (e) =>{
      setEmail(e.target.value);
     }
     const inputPassword = (e) =>{
      setPassword(e.target.value);
     }
     const Show = () =>{
      setShow();
     }
     return (
        <div>
          { show && 
            <div className={styles.form}>
              <input className={styles.input} type='text' placeholder='name' value={name} onChange={inputName}></input>
              <input className={styles.input} type='text' placeholder='email' value={email} onChange={inputEmail}></input>
              <input className={styles.input} type='password' placeholder='password' value={password} onChange={inputPassword}></input>
              <button className={styles.button} onClick={Show}>Send</button>
            </div>       
          }
          {!show && (
            <div className={styles.form}>
              <p>Name: {name}</p>
              <p>Email: {email}</p>
              <p>Password: {password}</p>
            </div>            
             )} 
        </div>
)}