import React, { Fragment } from 'react'
import nyan from './nyan.webp'

const Nyan = () => 
    <Fragment>
        <img src={nyan} alt="Loading..." style={{ 
            width:  '180px', 
            margin: 'auto', 
            display: 'block',
             paddingTop: '50px' }} />
    </Fragment>


export default Nyan