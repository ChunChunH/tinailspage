import React from 'react'
import { faInstagram, faFacebook, faWhatsapp } from '@fortawesome/free-brands-svg-icons'
import ContactIcons from './ContactIcons';
import ContactText from './ContactText';

const Contact = () => {
    return (
        <div className="container-fluid">
            <div className="row bg-gray">
                <div className="col-12 text-center">
                    <div className="text mt-5 mb-5">Contacto</div>
                </div>
            </div>
            <div className="row bg-gray">
                <ContactIcons
                    icon={faInstagram}
                />
                <ContactIcons
                    icon={faFacebook}
                />
                <ContactIcons
                    icon={faWhatsapp}
                />
            </div>
            <div className="row bg-gray pt-3">
                <ContactText
                    contactText = "tinailsrosario"
                />
                <ContactText
                    contactText = "Tinails Rosario"
                />
                <ContactText
                    contactText = "3417-207286"
                />
            </div>
        </div>
    )
}

export default Contact
