import React, { FC, Fragment } from 'react'
// styles
import styles from "./index.module.scss";
// layouts
import HEADER from '../../layouts/header';
import FOOTER from '../../layouts/footer';
// components 
import EXCURSION from './components/excursion';

const TOUR: FC = () => {
    return (
        <Fragment>
            <HEADER />
            <EXCURSION />
            <FOOTER />
        </Fragment>
    )
}

export default TOUR;