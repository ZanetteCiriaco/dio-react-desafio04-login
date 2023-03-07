import { Button } from '../../components/Button/Button';
import { Input } from '../../components/Input/Input';
import styles from './Login.module.css'

export function Login() {
    return (
        <div className={styles.container}>
            <div className={styles.loginContainer}>
                <h1> Login </h1>
                <Input></Input>    
                <Input></Input>
                <Button></Button>
            </div>
        </div>
    );
}