import React, { FC } from 'react';
// styles
import styles from "./index.module.scss";

const CONTACTDETAIL: FC = () => {
    return (
        <section className={styles.contact}>
            <div className={styles.contact_container}>
                <div className={styles.contact_detail} >
                    <h1 className={styles.contact_title}>Контакты</h1>

                    <div className={styles.contact_detail_info_con} >
                        <div className={styles.contact_detail_info} >
                            <h3 className={styles.contact_info_name} >Sales & Marketing Manager</h3>
                            <h4 className={styles.contact_info_des}>Дониёр Иноятов</h4>
                        </div>
                        <div className={styles.contact_detail_info}>
                            <h3 className={styles.contact_info_name} >Телефон</h3>
                            <h4 className={styles.contact_info_des}>+998 90 955 27 44</h4>
                            <h4 className={styles.contact_info_des}>+998 93 579 00 66</h4>
                        </div>
                        <div className={styles.contact_detail_info}>
                            <h3 className={styles.contact_info_name} >Почта</h3>
                            <h4 className={styles.contact_info_des}>AGENT1@CREATIVETRAVEL.UZ</h4>
                        </div>
                        <div className={styles.contact_detail_info}>
                            <h3 className={styles.contact_info_name} >Адрес</h3>
                            <h4 className={styles.contact_info_des}>г.Ташкент Юнусабадский район, ул. Ахмад Дониш №47 А</h4>
                        </div>
                    </div>
                </div>

                <div className={styles.contact_map}>
                    
                </div>
            </div>
        </section>
    )
}

export default CONTACTDETAIL