import React, { FC, Fragment } from 'react'
// layouts
import HEADER from '../../layouts/header';
import FOOTER from '../../layouts/footer';
// components 
import GALLERYIMAGES from './components/galleryimages';

const GALLERY: FC = () => {
    return (
        <Fragment>
            <HEADER />
            <GALLERYIMAGES />
            <FOOTER />
        </Fragment>
    )
}

export default GALLERY;