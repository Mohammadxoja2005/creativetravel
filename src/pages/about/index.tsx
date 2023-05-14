import React, { FC, Fragment } from 'react';
// styles
import styles from "./index.module.scss";
// layouts
import HEADER from '../../layouts/header';
import SUB from '../../layouts/sub';
import FOOTER from '../../layouts/footer';
// components
import ABOUTCOMPANY from './components/aboutCompany';
import ABOUTDES from './components/aboutdes';
import ADVANTAGE from './components/advantage';

const ABOUT: FC = () => {
    return (
        <Fragment>
            <HEADER />
            <ABOUTCOMPANY />
            <ABOUTDES />
            <ADVANTAGE />
            <SUB />
            <FOOTER />
        </Fragment>
    )
}

export default ABOUT;