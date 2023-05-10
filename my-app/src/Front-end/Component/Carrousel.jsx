import React from 'react';
import flechedroite from './Images/flechedroite.png';
import flechegauche from './Images/flechegauche.png';
import Appart from './Images/Appart.png';

const Carrousel = ({}) => {
    return ( 
            <div className='carrouselcontainer'>
                <img src={flechegauche} className='arrowgauche' alt="Image 1" />
                <img src={Appart} className='backimg' alt="Image 3" />
                <img src={flechedroite} className='arrowdroite' alt="Image 2" />
            </div>   
    )
}
export default Carrousel;