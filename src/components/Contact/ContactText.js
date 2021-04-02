import React from 'react'

const ContactText = ({contactText}) => {
    return (
        <>
            <div className="col-4 d-flex justify-content-center pb-5">
                    <h4 className="contact">{contactText}</h4>
            </div>
        </>
    )
}

export default ContactText
