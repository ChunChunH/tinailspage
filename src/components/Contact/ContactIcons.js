import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const ContactIcons = ({icon}) => {
    return (
        <>
            <div className="col-4 d-flex justify-content-center contact-icon">
                    <FontAwesomeIcon icon={icon} size="4x"/>
            </div>
        </>
    )
}

export default ContactIcons
