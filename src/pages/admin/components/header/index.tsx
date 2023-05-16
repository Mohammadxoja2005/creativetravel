import React, { FC } from 'react'
// styles
import styles from "./index.module.scss";
// icons
import LOGO from "../../../../assets/img/logo.png";
import DOWN from "../../../../assets/icons/downadmin.png";
import RUSSIAN from "../../../../assets/icons/russianflag.png";
// headless ui
import { Menu, Transition, Listbox } from '@headlessui/react';

const HEADER: FC = () => {
    return (
        <section className={styles.header}>
            <div className={styles.header_con}>
                <div className={styles.header_property_logo}>
                    <img src={LOGO} alt="logo cretive travel" />
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
        </section>
    )
}

export default HEADER;