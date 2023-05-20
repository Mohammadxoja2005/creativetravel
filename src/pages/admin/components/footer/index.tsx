import React, { FC } from 'react'
// styles
import styles from "./index.module.scss";
// images
import LOGO from "../../../../assets/img/logo.png";


const FOOTER: FC = () => {
    return (
        <section className={styles.footer}>
            <div className={styles.footer_con}>
                <div className={styles.footer_nav}>
                    <img src={LOGO} alt="creativetravel logo" />
                    <div className={styles.footer_nav_con}>
                        <a className={styles.footer_nav_link} href="#">Главная</a>
                        <a className={styles.footer_nav_link} href="#">Туры</a>
                        <a className={styles.footer_nav_link} href="#">О нас</a>
                        <a className={styles.footer_nav_link} href="#">Галерея</a>
                    </div>
                    <div className={styles.footer_nav_contact_con}>
                        <h3 className={styles.footer_nav_contact}>+998 90 955 27 44</h3>
                        <h3 className={styles.footer_nav_contact}>+998 93 579 00 66</h3>
                        <h4 className={styles.footer_nav_contact_name}>Дониёр Иноятов</h4>
                    </div>
                </div>

                <div className={styles.footer_info_con}>
                    <div className={styles.footer_info}>
                        <div className={styles.footer_info_des_con}>
                            <h2 className={styles.footer_info_name}>Безопасность</h2>
                            <h3 className={styles.footer_info_des}>Наши партнёры по проведению платежей гарантируют безопасность ваших данных.</h3>
                        </div>

                        <div className={styles.footer_info_des_con}>
                            <h2 className={styles.footer_info_name}>Программа лояльности</h2>
                            <h3 className={styles.footer_info_des}>Становитесь постоянным клиентом RateHawk.com, бронируйте с выгодой и получайте кешбэк баллами в программе лояльности. Баллами можно оплатить следующие бронирования.</h3>
                        </div>
                    </div>

                    <div className={styles.footer_info}>
                        <div className={styles.footer_info_des_con}>
                            <p className={styles.footer_info_detail} style={{ marginBottom: "20px" }} >Leaside Services Limited, reg.no HE342401, Business Address: 17 Karaiskaki Street, Office 22, Agaia Triada, Limassol, Cyprus, 3032 EMERGING TRAVEL UK LIMITED, Company number 12185384, Business Address: 6 Red Barn Mews, Battle, East Sussex, TN33 0AG Emerging Travel Germany ETG GmbH, HRB 213546, Business Address: Friedrichstraße 171, 10117 Berlin</p>
                            <p className={styles.footer_info_detail} >Политика хранения и обработки персональных данных</p>
                        </div>
                        <div className={styles.footer_info_des_con}>
                            <p className={styles.footer_info_detail} style={{ marginBottom: "10px" }}>Кредитная политика</p>
                            <p className={styles.footer_info_detail}>Asia/Samarkand UTC +5</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default FOOTER