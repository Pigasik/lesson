import styles from './Title.module.css';

export const Title = (props) => {
    const {title} = props;
    
    return(<div className={styles.text}>{title}</div>)        
};