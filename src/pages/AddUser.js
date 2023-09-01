import '../assets/scss/home/_home.scss'
import React , {useState} from "react";
import { Twirl as Hamburger } from 'hamburger-react'
import { useForm  } from "react-hook-form";
import { useNavigate } from 'react-router-dom';

const HomeAdmin = () => {

    const [isOpen, setOpen] = useState(false)
    const [validcheck, setValidCheck] = useState(false);
    const [validationSub, setvalidationSub] = useState(false);

    const body = document.getElementById('body');
    const { register , handleSubmit, formState: { errors } } = useForm();
    
    const navigate = useNavigate();
    const onSubmit = (data) => {
        navigate('/')
    };

    const handleCheckboxChange = (event) => {
        const checkboxes = document.querySelectorAll('input[type="checkbox"]');
        const isAtLeastOneChecked = Array.from(checkboxes).some((checkbox) => checkbox.checked);

        setValidCheck(isAtLeastOneChecked);
      };

    let menuOpen = () => {
        if (!body.classList.contains('menu-opened')) {
            setOpen(true);
            body.classList.add('menu-opened')
        } else {
            setOpen(false);
            body.classList.remove('menu-opened')
        }
    }

    let checkToggle = ()=>{
        if(validationSub!==true){
            setvalidationSub(true);
        }    
    }

    return (
        <>
            <div className="home_container">
                <div className="custom_container">
                    <div className="home_inner">
                        <div className="admin_navigate">
                            <div className="navigate_inner">
                                <div className="nav_wrapper">
                                    <div className="nav_frist_inline">
                                        <div className="go_back_container">
                                            <a href="/#" className="back_link icon-left">
                                                Вернуться назад
                                            </a>
                                        </div>
                                    </div>
                                    <div className="main_navigate">
                                        <div className="nav_title">Меню</div>
                                        <div className="nav_list">
                                            <a href="/#" className="nav_link active">Администрирование</a>
                                            <a href="/#" className="nav_link">Аналитика</a>
                                            <a href="/#" className="nav_link">Уведомления</a>
                                            <a href="/#" className="nav_link">Живая лента</a>
                                            <a href="/#" className="nav_link">Билеты</a>
                                            <a href="/#" className="nav_link">Обращения</a>
                                            <a href="/#" className="nav_link">Места на карте</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="admin_custom">
                            <div className="admin_page_links">
                                <div className="admin_paginate">
                                    <a href="/#" className="prev_link icon-right">Главная</a>
                                    <a href="/#" className="prev_link icon-right">Администрирование</a>
                                    <span className="page_name">Новый пользователь</span>
                                </div>
                                <a href="/login" className="logout_btn">Выйти</a>
                            </div>
                            <div className="page_title">Добавить нового пользователя</div>
                            <div className="page_inner_title">Данные пользователя</div>
                            <form onSubmit={handleSubmit(onSubmit)} className="form_contianer">
                                <div className={errors?.surname?.type === "required" ? "form_block has-error" : "form_block"}  >
                                    <div className="label_txt">Фамилия</div>
                                    <input className="siteInput" type="text" placeholder="Укажите фамилию пользователя" {...register("surname", { required: true })} />
                                    <p className="error-info" >Это поле обязательно к заполнению</p>
                                </div>
                                <div className={errors?.name?.type === "required" ? "form_block has-error" : "form_block"}  >
                                    <div className="label_txt">Имя</div>
                                    <input className="siteInput" type="text" placeholder="Укажите имя пользователя" {...register("name", { required: true })} />
                                    <p className="error-info" >Это поле обязательно к заполнению</p>
                                </div>
                                <div className={errors?.mail?.type === "required" || errors?.mail?.type === "pattern" ? "form_block has-error" : "form_block"}  >
                                    <div className="label_txt">E-mail</div>
                                    <input className="siteInput" type="text" placeholder="Укажите электронную почту пользователя" {...register("mail", { required: true, pattern: /\S+@\S+\.\S+/  })} />
                                    {errors?.mail?.type === "pattern" ? <p className="error-info email-info" >Неправильный  Email</p> :
                                    <p className="error-info" >Это поле обязательно к заполнению</p> }
                                </div>
                                <div className={!validcheck && validationSub ?  "checkboxes_form has-error" : "checkboxes_form"} >
                                    <div className="page_inner_title">Доступы к модулям</div>
                                    <div className="module_titiel">Модуль</div>
                                    <label>
                                        <input type="checkbox"  onChange={handleCheckboxChange} />
                                        <span className="checkbox_line icon-check"></span>
                                        <p className="checkbox_info">Администрирование</p>
                                    </label>
                                    <label>
                                        <input type="checkbox"  onChange={handleCheckboxChange} />
                                        <span className="checkbox_line icon-check"></span>
                                        <p className="checkbox_info">Аналитика</p>
                                    </label>
                                    <label>
                                        <input type="checkbox"  onChange={handleCheckboxChange} />
                                        <span className="checkbox_line icon-check"></span>
                                        <p className="checkbox_info">Уведомления</p>
                                    </label>
                                    <label>
                                        <input type="checkbox"  onChange={handleCheckboxChange} />
                                        <span className="checkbox_line icon-check"></span>
                                        <p className="checkbox_info">Живая лента</p>
                                    </label>
                                    <label>
                                        <input type="checkbox"  onChange={handleCheckboxChange} />
                                        <span className="checkbox_line icon-check"></span>
                                        <p className="checkbox_info">Билеты</p>
                                    </label>
                                    <label>
                                        <input type="checkbox"  onChange={handleCheckboxChange} />
                                        <span className="checkbox_line icon-check"></span>
                                        <p className="checkbox_info">Обращения</p>
                                    </label>
                                    <p className="error-info" >Выберите хотя бы один чекбокс</p>   
                                </div>
                                <button type="submit" className="AddUser_button" onClick={checkToggle} >Создать пользователя</button>
                            </form>
                        </div>
                        <Hamburger toggled={isOpen} toggle={menuOpen} />
                    </div>
                </div>
            </div>
        </>
    )
}

export default HomeAdmin;