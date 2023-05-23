import React, { FC } from 'react'
// styles
import styles from "./index.module.scss";

const PAYMENTINFO: FC = () => {
    return (
        <section className={styles.payinfo}>
            <div className={styles.payinfo_con}>

                <div className={styles.payinfo_payment}>
                    <h2 className={styles.payinfo_name}>Информация об оплате</h2>

                    <div className={styles.payinfo_nums}>
                        <div className={styles.payinfo_num_con}>
                            <div className={styles.payinfo_price}>
                                0 UZS
                            </div>
                            <h3 className={styles.payinfo_num_name}>Оплата не требуется</h3>
                        </div>

                        <div className={styles.payinfo_num_con}>
                            <div className={styles.payinfo_price}>
                                5 000 UZS
                            </div>
                            <h3 className={styles.payinfo_num_name}>Требуется оплата</h3>
                        </div>

                        <div className={styles.payinfo_num_con}>
                            <div className={styles.payinfo_price} style={{ color: "red" }}>
                                0 UZS
                            </div>
                            <h3 className={styles.payinfo_num_name}>Просроченный платеж</h3>
                        </div>
                    </div>

                </div>

                <div className={styles.payinfo_cancel_con}>
                    <div className={styles.payinfo_cancel}>
                        <h2 className={styles.payinfo_cancel_name}>Бесплатная отмена</h2>

                        <div className={styles.payinfo_cancel_deadline}>
                            <div className={styles.payinfo_cancel_times}>
                                <p className={styles.payinfo_cancel_show}>0</p>
                                <p className={styles.payinfo_cancel_text}>Заканчивается через 24 часа</p>
                            </div>
                            <div className={styles.payinfo_cancel_times}>
                                <p className={styles.payinfo_cancel_show}>0</p>
                                <p className={styles.payinfo_cancel_text}>Заканчивается через 4 рабочих дня</p>
                            </div>
                        </div>

                    </div>

                    <div className={styles.payinfo_cancel}>
                        <h2 className={styles.payinfo_cancel_name}>Автоотмена</h2>

                        <div className={styles.payinfo_cancel_deadline}>
                            <div className={styles.payinfo_cancel_times}>
                                <p className={styles.payinfo_cancel_show}>0</p>
                                <p className={styles.payinfo_cancel_text}>Заканчивается через 24 часа</p>
                            </div>
                            <div className={styles.payinfo_cancel_times}>
                                <p className={styles.payinfo_cancel_show}>0</p>
                                <p className={styles.payinfo_cancel_text}>Заканчивается через 24 часа</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}


export default PAYMENTINFO;