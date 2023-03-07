import styles from './Input.module.css';
import { Controller } from 'react-hook-form';

export function Input() {
    return(
        <>
            <div className={styles.inputContainer}>
                <input placeholder='teste' />
            </div>
        </>
    );
}