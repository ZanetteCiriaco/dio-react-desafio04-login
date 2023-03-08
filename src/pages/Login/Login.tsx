import { Button } from '../../components/Button/Button';
import { Input } from '../../components/Input/Input';
import { useForm } from 'react-hook-form';
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import styles from './Login.module.css'
import { defaultValues ,IFormLogin } from '../../interfaces/IFormLogin';


export function Login() {

    const {
        control,
        formState: { errors, isValid },
    } = useForm<IFormLogin>({
        resolver: yupResolver(schema),
        mode: "onBlur",
        defaultValues,
        reValidateMode: "onChange",
    });

    function handleLoginClick() {
        console.log("Login!")
        console.log(isValid)
    }

    return (
        <div className={styles.container}>
            <div className={styles.loginContainer}>
                <h1> Login </h1>
                <Input 
                    name='email' 
                    placeholder='email'
                    control={control} 
                    errorMessage={errors?.email?.message}
                />    
                <Input 
                    name='password' 
                    type='password'
                    placeholder='senha'
                    control={control} 
                    errorMessage={errors?.password?.message} 
                />

                <Button 
                    title="Entrar" 
                    isDisabled={!isValid} 
                    onClick={handleLoginClick} 
                />
            </div>
        </div>
    );
}

const schema = yup.object({
    email: yup
        .string()
        .email("E-mail inválido")
        .required("Campo obrigatório"),
    password: yup
        .string()
        .min(6, "No minimo 6 caracteres")
        .required("Campo obrigatório")
})
.required();