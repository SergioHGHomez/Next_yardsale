import React from 'react'
import '@styles/NotFound.scss'

const NotFound = () => {

    return(
        <div className='NotFound'>

            <div className='NotFound_info'>
            <p className='NotFound_text'>opps.. Error </p>
            <p className='NotFound_text'>404</p>
            <p className='NotFound_text'>page not found</p>
            </div>
        </div>
    )
}

export default NotFound;