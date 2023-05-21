import React, { FC } from 'react'
import styles from "./index.module.scss";
// icons
import INSTAGRAM from "../../assets/icons/instagram.png";
import FACEBOOK from "../../assets/icons/facebook.png";
import VK from "../../assets/icons/vk.png";
import EMAIL from "../../assets/icons/email.png";
import LOCATION from "../../assets/icons/location.png";
import LOGO from "../../assets/img/footer_logo.png";

const FOOTER: FC = () => {
    return (
        <footer className={styles.footer}>
            <div className={styles.footer_container}>
                <div className={styles.footer_info}>

                    <div className={styles.footer_info_nav_con}>
                        <img src={LOGO} alt="creative travel logo" />
                        <div className={styles.footer_info_nav}>
                            <a className={styles.footer_info_nav_link} href="#">Главная</a>
                            <a className={styles.footer_info_nav_link} href="#">Туры</a>
                            <a className={styles.footer_info_nav_link} href="#">О нас</a>
                            <a className={styles.footer_info_nav_link} href="#">Галерея</a>
                        </div>
                    </div>

                    <div className={styles.footer_info_imgs}>
                        <p className={styles.footer_info_img_name}>@Creativetravelgroup</p>
                        <div className={styles.footer_info_img_con}>
                            {[1, 2, 3, 4, 5, 6].map((index) => {
                                return (
                                    <div key={index} className={styles.footer_info_img}>
                                        <img src="" alt="" />
                                    </div>
                                )
                            })

                            }
                        </div>
                    </div>

                    <div className={styles.footer_info_social}>
                        <p className={styles.footer_info_social_title}>Социальные сети</p>
                        <div className={styles.footer_info_social_links}>
                            <a className={styles.footer_info_social_link} href="#"><img src={INSTAGRAM} alt="" /></a>
                            <a className={styles.footer_info_social_link} href="#"><img src={FACEBOOK} alt="" /></a>
                            <a className={styles.footer_info_social_link} href="#"><img src={VK} alt="" /></a>
                        </div>
                    </div>

                    <div className={styles.footer_info_contact}>
                        <div className={styles.footer_info_phone_con}>
                            <p className={styles.footer_info_phone}>+998 90 955 27 44</p>
                            <p className={styles.footer_info_phone}>+998 93 579 00 66</p>
                            <p className={styles.footer_info_phone_name}>Дониёр Иноятов</p>
                        </div>

                        <div className={styles.footer_info_data_con}>
                            <div className={styles.footer_info_data}>
                                <img src={EMAIL} alt="creative travel email" />
                                <p className={styles.footer_info_data_text} >AGENT1@CREATIVETRAVEL.UZ</p>
                            </div>
                            <div className={styles.footer_info_data}>
                                <img src={LOCATION} alt="creative travel location" />
                                <p className={styles.footer_info_data_text}>г.Ташкент Юнусабадский район, ул. Ахмад Дониш №47 А</p>
                            </div>
                        </div>
                    </div>

                </div>

                <div className={styles.footer_rights}>
                    <p className={styles.footer_rights_name}>© 2022 Creative Travel All rights reserved.</p>
                </div>
            </div>
        </footer>
    )
}

export default FOOTER;