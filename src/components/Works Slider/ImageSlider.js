import React from 'react'

const ImageSlider = ({src}) => {
    return (
        <>
            <img src={src} width="500" height="500" />
            {/* <div className={`carousel-item ${active}`} >
                <img className="" width="500" height="500" src={src} alt="First slide"/>
            </div> */}
        </>
    )
}

export default ImageSlider
