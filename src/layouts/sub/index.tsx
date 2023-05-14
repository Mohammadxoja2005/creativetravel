import React, { FC } from 'react'
import styles from "./index.module.scss";

const SUB: FC = () => {
    return (
        <section className={styles.sub} >
            <div className={styles.sub_container}>

                <div className={styles.sub_img}>

                </div>

                <div className={styles.sub_form_con}>
                    <h2 className={styles.sub_form_title}>Подпишитесь на рассылку</h2>

                    <form className={styles.sub_form}>
                        <input className={styles.sub_form_input} placeholder='Имя' type="text" />
                        <input className={styles.sub_form_input} placeholder='Email' type="text" />
                        <button className={styles.sub_form_btn}>Подписаться</button>
                        <p className={styles.sub_form_agreement}>Вы также соглашаетесь с нашими Условиями использования и Политикой конфиденциальности.</p>
                    </form>
                </div>

            </div>
        </section>
    )
}

export default SUB;