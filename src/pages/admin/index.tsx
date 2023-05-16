import React, { FC, Fragment } from 'react'
// layouts
import FILTER from '../../layouts/filter'
// components
import HEADER from './components/header';
import PAYMENTINFO from './components/paymentInformation';
import FINANCE from './components/finance';

const ADMIN: FC = () => {
    return (
        <Fragment>
            <HEADER />
            <FILTER />
            <PAYMENTINFO />
            <FINANCE />
        </Fragment>
    )
}

export default ADMIN