import React, { FC, useState, Fragment } from 'react';
// styles
import styles from "./index.module.scss";
// headless ui
import { Menu, Tab } from '@headlessui/react';
// components
import FILTERBYHOTEL from './filterByHotel';
import FILTERBYFLY from './filterByFly';
import FILTERBYTRANSFER from './filterByTransfer';
import FILTERBYAUTO from './filterByAuto';
// data 
import { filterSortData } from '../../data/data';

const FILTER: FC = () => {

    return (
        <section className={styles.filter}>
            <Tab.Group>
                <div className={styles.filter_container}>

                    <Tab.List>
                        <div className={styles.filter_sort_btn_container}>
                            {filterSortData.map((value) => {
                                return (
                                    <Tab
                                        key={value.id}
                                        className={({ selected }) =>
                                            ` 
                                            ${selected ? styles.filter_sort_btn_selected : styles.filter_sort_btn}
                                        `
                                        }
                                    >
                                        {value.name}
                                    </Tab>
                                )
                            })}
                        </div>
                    </Tab.List>

                    <Tab.Panels>
                        <Tab.Panel>
                            <FILTERBYHOTEL />
                        </Tab.Panel>
                        <Tab.Panel>
                            <FILTERBYFLY />
                        </Tab.Panel>
                        <Tab.Panel>
                            <FILTERBYTRANSFER />
                        </Tab.Panel>
                        <Tab.Panel>
                            <FILTERBYAUTO />
                        </Tab.Panel>
                    </Tab.Panels>
                </div>
            </Tab.Group>
        </section>
    )
}

export default FILTER