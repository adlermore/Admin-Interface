import '../assets/scss/home/_home.scss'
import React , {useState} from "react";
import { Twirl as Hamburger } from 'hamburger-react'

const HomeAdmin = () => {

    const [isOpen, setOpen] = useState(false)
    const body = document.getElementById('body');

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
                                        <div className="user_container">
                                            <a href="/#" className="user_inner">
                                                <span className="icon-user"></span>
                                                    Дмитриев Александр
                                                <span className="icon-right"></span>
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
                                    <span className="page_name">Администрирование</span>
                                </div>
                                <a href="/login" className="logout_btn">Выйти</a>
                            </div>
                            <div className="page_title">Администрирование</div>
                            <div className="search_block">
                                <button className="search_btn"> <span className="icon-search"></span></button>
                                <input type="text" className="main_search" placeholder='Искать' />
                            </div>
                            <div className="user_result_container">
                                <div className="block_title_line">
                                    <div className="title_label">ID</div>
                                    <div className="title_label">Имена</div>
                                    <div className="title_label">Доступы</div>
                                </div>
                                <div className="user_result_list">
                                    <div className="user_result_block">
                                        <div className="user_number">1</div>
                                        <div className="user_name">Дмитриев Александр</div>
                                        <div className="user_buttons">
                                            <div className="user_hash">
                                                <div className="hash_name">Администрирование</div>
                                                <div className="hash_name">Билеты</div>
                                                <div className="hash_name">Аналитика</div>
                                                <div className="hash_name">Уведомления</div>
                                                <div className="hash_name">Живая лента</div>
                                                <div className="hash_name">Обращения</div>
                                            </div>
                                            <div className="user_main_btns">
                                                <a href="/#" className="edit_btn"><span className="icon-edit"></span></a>
                                                <a href="/#" className="lock_btn"><span className="icon-lock"></span></a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="user_result_block">
                                        <div className="user_number">2</div>
                                        <div className="user_name">Harold Davidson</div>
                                        <div className="user_buttons">
                                            <div className="user_hash">
                                                <div className="hash_name">Аналитика</div>
                                                <div className="hash_name">Уведомления</div>
                                                <div className="hash_name">Живая лента</div>
                                                <div className="hash_name">Обращения</div>
                                            </div>
                                            <div className="user_main_btns">
                                                <a href="/#" className="edit_btn"><span className="icon-edit"></span></a>
                                                <a href="/#" className="lock_btn"><span className="icon-unlock"></span></a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="user_result_block">
                                        <div className="user_number">3</div>
                                        <div className="user_name">Stephen Watson</div>
                                        <div className="user_buttons">
                                            <div className="user_hash">
                                                <div className="hash_name">Живая лента</div>
                                                <div className="hash_name">Обращения</div>
                                            </div>
                                            <div className="user_main_btns">
                                                <a href="/#" className="edit_btn"><span className="icon-edit"></span></a>
                                                <a href="/#" className="lock_btn"><span className="icon-unlock"></span></a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="user_result_block">
                                        <div className="user_number">4</div>
                                        <div className="user_name">Sara Curtis</div>
                                        <div className="user_buttons">
                                            <div className="user_hash">
                                                <div className="hash_name">Обращения</div>
                                            </div>
                                            <div className="user_main_btns">
                                                <a href="/#" className="edit_btn"><span className="icon-edit"></span></a>
                                                <a href="/#" className="lock_btn"><span className="icon-unlock"></span></a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="pageing">
                                <a href="/#" className="prev_bnt"><span className="icon-left"></span></a>
                                <div className="page_list">
                                    <a href="/#" className="page_inner_link active">1</a>
                                    <a href="/#" className="page_inner_link">2</a>
                                    <a href="/#" className="page_inner_link">3</a>
                                    <a href="/#" className="page_inner_link">4</a>
                                    <a href="/#" className="page_inner_link">5</a>
                                </div>
                                <a href="/#" className="next_bnt"><span className="icon-right"></span></a>
                            </div>
                        </div>
                        <Hamburger toggled={isOpen} toggle={menuOpen} />
                    </div>
                </div>
            </div>
        </>
    )
}

export default HomeAdmin;