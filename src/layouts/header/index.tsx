import React, { FC, useState } from 'react';
import styles from "./index.module.scss";

import LOGO from "../../assets/img/logo.png";
import PHONE from "../../assets/icons/phone.png";
import BURGER from '../../assets/icons/burger.png'
// react-router-dom
import { Link } from 'react-router-dom';

const HEADER: FC = () => {
    const [language, setLanguage] = useState<boolean>(false);
    const [isOpen, setIsOpen] = useState<boolean>(false);

    return (
        <header className={styles.header}>
            <div className={styles.header_container}>

                <div className={styles.header_logo_container}>
                    <Link to="/"><img src={LOGO} alt="creative travel logo" /></Link>

                    <div className={styles.header_logo_contact}>
                        <img src={PHONE} alt="header phone icon" />

                        <div className={styles.header_contact_info_container}>
                            <p className={styles.header_contact_info}>Служба поддержки <span className={styles.header_contact_info_time}>24/7</span></p>
                            <p className={styles.header_contact_phone}> +998 93 579 00 66</p>
                        </div>

                    </div>

                </div>

                <div className={styles.header_menu}>
                    <div className={styles.header_menu_container}>
                        <Link className={styles.header_menu_link_href} to="/tours">Туры</Link>
                        <Link className={styles.header_menu_link_href} to="/about">О нас</Link>
                        <Link className={styles.header_menu_link_href} to="/gallery">Галлерея</Link>
                    </div>

                    <div className={styles.header_menu_lan} onClick={() => setLanguage(prev => !prev)}>
                        {language ? "Uz" : "Ру"}
                    </div>

                    <div className={styles.header_menu_btn}>Войти</div>
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
                            <div className={styles.header_menu_lan} onClick={() => setLanguage(prev => !prev)}>
                                {language ? "Uz" : "Ру"}
                            </div>

                            <div className={styles.header_menu_btn}>Войти</div>
                        </div>
                    </div>
                    : null}
            </div>

        </header>
    )
}

export default HEADER