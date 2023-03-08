import { IButtonProps } from '../../interfaces/IButtonProps';
import styles from './Button.module.css';

export function Button({title, onClick, isDisabled}: IButtonProps) {
    return(
        <button 
            className={styles.buttonContainer}
            onClick={onClick}
            disabled={isDisabled}> {title}
        </button>
    );
}