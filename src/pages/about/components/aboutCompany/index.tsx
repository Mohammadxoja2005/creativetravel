import React, { FC } from 'react'
// styles
import styles from "./index.module.scss";

const ABOUTCOMPANY: FC = () => {
    return (
        <section className={styles.about}>
            <div className={styles.about_container}>

                <div className={styles.about_des}>
                    <h1 className={styles.about_des_title}>О компании <span className={styles.about_des_highlight}>Creative Travel Group</span></h1>
                    <div className={styles.about_des_img}>

                    </div>
                </div>
            </div>
        </section>
    )
}

export default ABOUTCOMPANY;