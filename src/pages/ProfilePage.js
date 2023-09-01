import '../assets/scss/home/_home.scss'
import React , {useState} from "react";
import { Twirl as Hamburger } from 'hamburger-react'
import { useForm  } from "react-hook-form";
import { useNavigate } from 'react-router-dom';
import Accordion from '../components/Accordion';


const items = [
    {
      title: 'Администрирование',
      content: 'Size and temperament. Owners often select a breed of dog that they find to be compatible with their own lifestyle and desires from a companion',
    },
    {
      title: 'Аналитика',
      content: 'There are many breeds of dogs. Each breed varies in size and temperament. Owners often select a breed of dog that they find to be compatible with their own lifestyle and desires from a companion',
    },
    {
      title: 'Живая лента',
      content: 'Each breed varies in size and temperament. Owners often select a breed of dog that thand desires from a companion',
    },
    {
        title: 'Билеты',
        content: 'are many breeds of dogs. Each breed varies in size and temperament. Owners often select a breed of dog that thand desires from a companion',
    },
    {
        title: 'Обращения',
        content: 'in size and temperament. Owners often select a breed of dog that thand desires from a companion',
    },
  ];


const ProfilePage = () => {

    const [isOpen, setOpen] = useState(false)
    const body = document.getElementById('body');
    const { register , handleSubmit, formState: { errors } } = useForm();
    
    const navigate = useNavigate();
    const onSubmit = (data) => {
        navigate('/')
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
                                    <span className="page_name">Страница пользовател</span>
                                </div>
                                <a href="/login" className="logout_btn">Выйти</a>
                            </div>
                            <div className="page_title">Страница пользовател</div>
                            <div className="profile_inline">
                                <div className="profile_info">
                                    <div className="page_inner_title">Данные пользователя</div>
                                    <div className="user_block">
                                        <div className="user_img"><span className="icon-user"></span></div>
                                        <div className="user_info">
                                            <div className="user_name">Дмитриев Александр</div>
                                            <div className="user_mail">example@mail.ru</div>
                                        </div>
                                    </div>
                                    <div className="page_inner_title">Доступы к модулям</div>
                                    <div className="acardion_container">
                                        <Accordion items={items} />
                                    </div>
                                </div>
                                <div className="change_info">
                                    <div className="page_inner_title">Изменить пароль</div>
                                    <form onSubmit={handleSubmit(onSubmit)} className="form_contianer">
                                        <div className={errors?.newpass?.type === "required" ? "form_block has-error" : "form_block"}  >
                                            <div className="label_txt">Новый пароль</div>
                                            <input className="siteInput" type="text" placeholder="Укажите новый пароль" {...register("newpass", { required: true })} />
                                            <p className="error-info" >Это поле обязательно к заполнению</p>
                                        </div>
                                        <div className={errors?.passrequer?.type === "required" ? "form_block has-error" : "form_block"}  >
                                            <div className="label_txt">Подтвердите пароль</div>
                                            <input className="siteInput" type="text" placeholder="Подтвердите пароль" {...register("passrequer", { required: true })} />
                                            <p className="error-info" >Это поле обязательно к заполнению</p>
                                        </div>
                                        <button type="submit" className="change_button" >Изменить</button>
                                    </form>
                                </div>
                            </div>
                        </div>
                        <Hamburger toggled={isOpen} toggle={menuOpen} />
                    </div>
                </div>
            </div>
        </>
    )
}

export default ProfilePage;