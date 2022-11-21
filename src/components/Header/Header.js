import styles from './Header.module.css';
import { useContext } from 'react';
import { ThemeContext } from '../../cotext/ThemeContext';

export const Header = () => {
    const {theme} = useContext(ThemeContext);
    return <header className={`${styles.header} ${theme === 'black' ? styles.black : ''}`}>Header</header>
}