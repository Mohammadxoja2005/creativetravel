import React, { FC } from 'react'
// styles
import styles from "./index.module.scss";

const FINANCE: FC = () => {
    return (
        <section className={styles.finance}>
            <div className={styles.finance_con}>
                <h2 className={styles.finance_title}>Финансовая информация</h2>

                <div className={styles.finance_info_con}>

                    <div className={styles.finance_info}>
                        <h3 className={styles.finance_info_name}>Неоплаченные заказы</h3>

                        <div className={styles.finance_info_sum_con}>

                            <div className={styles.finance_info_sum_col} >
                                <div className={styles.finance_info_sum}>
                                    <h3 className={styles.finance_info_title}>0 сумм</h3>
                                    <p className={styles.finance_info_text}>Всего неоплаченных заказов</p>
                                </div>
                                <div className={styles.finance_info_sum}>
                                    <h3 className={styles.finance_info_title}>0 сумм</h3>
                                    <p className={styles.finance_info_text}>Общее количество неоплаченных невозвратов заказов</p>
                                </div>
                            </div>

                            <div className={styles.finance_info_sum_col}>
                                <div className={styles.finance_info_sum}>
                                    <h3 className={styles.finance_info_title}>0 сумм</h3>
                                    <p className={styles.finance_info_text}>Просроченная задолженность </p>
                                </div>
                                <div className={styles.finance_info_sum}>
                                    <h3 className={styles.finance_info_title}>0 сумм</h3>
                                    <p className={styles.finance_info_text}>Всего неоплаченных возвратов заказов</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={styles.finance_info}>
                        <h3 className={styles.finance_info_name}>Информация об оплате</h3>

                        <div className={styles.finance_info_sum_con}>

                            <div className={styles.finance_info_sum_col} >
                                <div className={styles.finance_info_sum}>
                                    <h3 className={styles.finance_info_title} style={{color: "red"}}>0 сумм</h3>
                                    <p className={styles.finance_info_text}>Лимит на новые невозвратные заказы</p>
                                </div>
                                <div className={styles.finance_info_sum}>
                                    <h3 className={styles.finance_info_title}>0 сумм</h3>
                                    <p className={styles.finance_info_text}>Депозит</p>
                                </div>
                            </div>

                            <div className={styles.finance_info_sum_col}>
                                <div className={styles.finance_info_sum}>
                                    <h3 className={styles.finance_info_title}>0 сумм</h3>
                                    <p className={styles.finance_info_text}>Переплата </p>
                                </div>
                                <div className={styles.finance_info_sum}>
                                    <h3 className={styles.finance_info_title}>0 сумм</h3>
                                    <p className={styles.finance_info_text}>Кредитный лимит</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    )
}

export default FINANCE;