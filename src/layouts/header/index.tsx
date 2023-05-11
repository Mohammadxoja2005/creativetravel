import React, { FC, useState } from 'react';
import styles from "./index.module.scss";

import LOGO from "../../assets/img/logo.png";
import PHONE from "../../assets/icons/phone.png";

const HEADER: FC = () => {
    const [language, setLanguage] = useState(false);

    return (
        <header className={styles.header}>
            <div className={styles.header_container}>

                <div className={styles.header_logo_container}>
                    <img src={LOGO} alt="creative travel logo" />

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
                        <a className={styles.header_menu_link_href} href="#">Туры</a>
                        <a className={styles.header_menu_link_href} href="#">О нас</a>
                        <a className={styles.header_menu_link_href} href="#">Галлерея</a>
                    </div>

                    <div className={styles.header_menu_lan} onClick={() => setLanguage(prev => !prev)}>
                        {language ? "Uz" : "Ру"}
                    </div>

                    <div className={styles.header_menu_btn}>Войти</div>
                </div>

            </div>
        </header>
    )
}

export default HEADER