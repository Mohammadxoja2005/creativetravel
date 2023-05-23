import React, { FC, Fragment } from 'react'
// layouts
import FILTER from '../../layouts/filter'
// components
import HEADER from './components/header';
import PAYMENTINFO from './components/paymentInformation';
import FINANCE from './components/finance';
import BLOG from './components/blog';
import FOOTER from './components/footer';

const ADMIN: FC = () => {
    return (
        <Fragment>
            <HEADER />
            <FILTER />
            <PAYMENTINFO />
            <FINANCE />
            <BLOG />
            <FOOTER />
        </Fragment>
    )
}

export default ADMIN