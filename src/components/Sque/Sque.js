import styles from './Sque.module.css';

export const Sque = ({color, onClick}) => {
    
    return <div style={{backgroundColor: color}} className={styles.sque} onClick={onClick}></div>
}