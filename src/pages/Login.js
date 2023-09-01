import '../assets/scss/login/_login.scss'
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from 'react-router-dom';

const Login = () => {
    
    const [showPass, setshowPass] = useState(true);
    const { register, handleSubmit, formState: { errors } } = useForm();

    const navigate = useNavigate();
    const onSubmit = (data) => {
        navigate('/')
    };
    const switchshowPass = (e) => {
        e.preventDefault();
        setshowPass(!showPass);
    }

    return (
        <>
            <div className="login_container">
                <div className="custom_container">
                    <div className="login_inner">
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <div className={errors?.login?.type === "required" ? "form_block has-error" : "form_block"}  >
                                <div className="label_txt">Логин</div>
                                <input className="siteInput" type="text" placeholder="Введите логин" {...register("login", { required: true })} />
                                <p className="error-info" >Это поле обязательно к заполнению</p>
                            </div>
                            <div className={errors?.password?.type === "required" ? "form_block has-error" : "form_block"}  >
                                <div className="label_txt">Пароль</div>
                                <input className="siteInput" type={showPass ? "password" : "text"} placeholder="Введите пароль" {...register("password", { required: true })} />
                                <a href="/#" onClick={(e)=>switchshowPass(e)}><span className={showPass? "icon-show " : "active icon-show "}></span></a>
                                <p className="error-info" >Это поле обязательно к заполнению</p>
                            </div>
                            <button type="submit" className="login_button" >Войти</button>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Login;