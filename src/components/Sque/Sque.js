import styles from './Sque.module.css';

export const Sque = ({color}) => {
    
    return <div style={{backgroundColor: color}} className={styles.sque}></div>
}