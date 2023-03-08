import styles from './Input.module.css';
import { Controller } from 'react-hook-form';
import { IInputProps } from '../../interfaces/IInputProps';

export function Input({ control, name, errorMessage, ...rest }: IInputProps) {
    return(
        <div>
            <div className={styles.inputContainer}>
                <Controller 
                    control={control}
                    name={name}
                    render={({field: { onChange, onBlur, value, ref}}) => (
                        <input
                            {...rest}
                            onChange={onChange}
                            onBlur={onBlur}
                            value={value}
                            ref={ref}
                        />
                    )}
                />
            </div>
            { errorMessage ?  
                <p className={styles.errorMessage}>
                    {errorMessage}
                </p> 
                : 
                null 
            }
        </div>
    );
}