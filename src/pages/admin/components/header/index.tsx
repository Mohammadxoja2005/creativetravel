import React, { FC, useState } from 'react'
// styles
import styles from "./index.module.scss";
// icons
import LOGO from "../../../../assets/img/logo.png";
import DOWN from "../../../../assets/icons/downadmin.png";
import RUSSIAN from "../../../../assets/icons/russianflag.png";
import BURGER from '../../../../assets/icons/burger.png'
// headless ui
import { Menu, Transition, Listbox } from '@headlessui/react';
// react-router-dom
import { Link } from "react-router-dom";

const HEADER: FC = () => {
    const [isOpen, setIsOpen] = useState<boolean>(false);
    const [language, setLanguage] = useState<boolean>(false);

    return (
        <header className={styles.header}>
            <div className={styles.header_con}>
                <div className={styles.header_property_logo}>
                    <Link to={'/'}><img src={LOGO} alt="logo cretive travel" /></Link>
                    <div className={styles.header_links} >
                        <a href="#">Поиск</a>
                        <a href="#">Заказы</a>
                        <a href="#">Отчётность</a>
                        <a href="#">Поддержка</a>
                        <div className={styles.header_link_more}>
                            <a href="#">Ещё</a>
                            <img src={DOWN} alt="down img header" />
                        </div>
                    </div>
                </div>

                <div className={styles.header_property_lang}>

                    <div className={styles.header_lang_con}>
                        <Listbox>
                            <Listbox.Button>
                                <div className={styles.header_lang}>
                                    <img src={RUSSIAN} alt="language russian" />
                                    <p className={styles.header_lang_name}>Русский</p>
                                    <img src={DOWN} alt="down image" />
                                </div>
                            </Listbox.Button>

                            <Listbox.Options>
                                <div className={styles.header_lang_opt}>
                                    <img src={RUSSIAN} alt="language russian" />
                                    <p className={styles.header_lang_name}>English</p>
                                </div>
                            </Listbox.Options>

                        </Listbox>
                    </div>

                    <div className={styles.header_profile}>
                        <div className={styles.header_profile_img}>
                            <img src="" alt="" />
                        </div>
                        <div className={styles.header_profile_name_con}>
                            <p className={styles.header_profile_name}>Джон Дое</p>
                            <img src={DOWN} alt="" />
                        </div>
                    </div>

                </div>
            </div>

            <div className={styles.header_container_response}>
                <div className={styles.header_container_mobile}>
                    <div className={styles.header_logo_container}>
                        <Link to="/"><img src={LOGO} alt="creative travel logo" title='creative travel logo' /></Link>
                    </div>
                    <img style={{ cursor: "pointer" }} onClick={() => setIsOpen(!isOpen)} src={BURGER} alt="creative travel burger menu" title='creative travel burger menu' />
                </div>

                {isOpen
                    ?
                    <div className={styles.header_menu}>
                        <div className={styles.header_menu_container}>
                            <Link className={styles.header_menu_link_href} to="/tours">Туры</Link>
                            <Link className={styles.header_menu_link_href} to="/about">О нас</Link>
                            <Link className={styles.header_menu_link_href} to="/gallery">Галлерея</Link>
                        </div>

                        <div className={styles.header_menu_login}>
                            <div className={styles.header_lang_con}>
                                <Listbox>
                                    <Listbox.Button>
                                        <div className={styles.header_lang}>
                                            <img src={RUSSIAN} alt="language russian" />
                                            <p className={styles.header_lang_name}>Русский</p>
                                            <img src={DOWN} alt="down image" />
                                        </div>
                                    </Listbox.Button>

                                    <Listbox.Options>
                                        <div className={styles.header_lang_opt}>
                                            <img src={RUSSIAN} alt="language russian" />
                                            <p className={styles.header_lang_name}>English</p>
                                        </div>
                                    </Listbox.Options>

                                </Listbox>
                            </div>

                            <div className={styles.header_profile}>
                                <div className={styles.header_profile_img}>
                                    <img src="" alt="" />
                                </div>
                                <div className={styles.header_profile_name_con}>
                                    <p className={styles.header_profile_name}>Джон Дое</p>
                                    <img src={DOWN} alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
                    : null}
            </div>
        </header>
    )
}

export default HEADER;