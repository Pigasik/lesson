import styles from './Footer.module.css';
import { useContext } from 'react';
import { ThemeContext } from '../../cotext/ThemeContext';

export const Footer = () =>{
    const {theme} = useContext(ThemeContext);
    return <footer className={`${styles.footer} ${theme === 'black' ? styles.black : ''}`}>Footer</footer>
}