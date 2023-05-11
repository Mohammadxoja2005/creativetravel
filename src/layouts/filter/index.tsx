import React, { FC, useState, Fragment } from 'react';
// styles
import styles from "./index.module.scss";
// headless ui
import { Menu } from '@headlessui/react';
// components
import FILTERITEMS from './filterItems';

const FILTER: FC = () => {

    const [calendarValue, setCalendarValue] = useState<Date>(new Date());
    const [openCalendar, setOpenCalendar] = useState<boolean>(false);

    const chooseCalendarValue = (e: any): void => {
        setCalendarValue(e);
        setOpenCalendar(false);
    }

    return (
        <section className={styles.filter}>
            <div className={styles.filter_container}>
                <Menu>
                    <div className={styles.filter_sort_btn_container}>
                        <Menu.Button className={styles.filter_sort_btn}>
                            Отели
                        </Menu.Button>
                        <Menu.Button className={styles.filter_sort_btn}>
                            Авиабилеты
                        </Menu.Button>
                        <Menu.Button className={styles.filter_sort_btn}>
                            Трансфер
                        </Menu.Button>
                        <Menu.Button className={styles.filter_sort_btn}>
                            Аренда авто
                        </Menu.Button>
                    </div>
                </Menu>
                <FILTERITEMS />
            </div>
        </section>
    )
}

export default FILTER