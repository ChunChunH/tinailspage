import React from 'react'

const Service = ({src, servicetext, explanation }) => {
    return (
        <>
            <div className="col-4 text-center">
                <div className="image-container">
                    <img width="100%" className="services" src={src}/>
                </div>
                <h3 className="service-text mt-4">{servicetext}</h3>
                <p>{explanation}</p>
            </div>
        </>
    )
}

export default Service
