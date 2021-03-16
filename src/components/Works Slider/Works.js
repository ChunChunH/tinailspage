import React, {useState} from 'react'
// Images
import aby from "../../assets/aby.jpg"
import agus from "../../assets/agus.jpg"
import azulesMama from "../../assets/azules-mama.jpg"
import barby from "../../assets/Barby.jpg"
import barbyOjos from "../../assets/BarbyOjos.jpg"
import cari from "../../assets/cari.jpg"
import daniela from "../../assets/Daniela.png"
import gi from "../../assets/Gi.jpg"
import lili from "../../assets/Lili.jpg"
import mama2 from "../../assets/mama2.jpg"
import mami from "../../assets/Mami.jpg"
import mili from "../../assets/Mili.jpg"
import miriam from "../../assets/miriam.jpg"
import piesCami from "../../assets/PiesCami.jpg"
import tiaSole from "../../assets/Tiasole.jpg"
import uñasa from "../../assets/Uñasa.jpg"
// Plugins
import Carousel, { slidesToShowPlugin, slidesToScrollPlugin } from '@brainhubeu/react-carousel';
import '@brainhubeu/react-carousel/lib/style.css';

const Works = () => {

    const [images] = useState([
        aby, agus, azulesMama, barby, barbyOjos, cari, daniela, gi, lili, mama2, mami, mili, miriam, piesCami, tiaSole, uñasa
    ])


    return (
        <div className="container-fluid ">
            <div className="row bg-gray pb-5">
                <div className="col-12 text-center">
                    <div className="text mt-5">Trabajos</div>
                </div>
                <div className="col-12">
                    <Carousel
                    plugins={[
                        'centered',
                        'infinite',
                        'arrows',
                        {
                            resolve: slidesToShowPlugin,
                            options: {
                                numberOfSlides: 4,
                            },
                        },
                        {
                            resolve: slidesToScrollPlugin,
                            options: {
                                numberOfSlides: 4,
                            },
                        },
                    ]}   
                >
                    {images.map((image, index) => {
                        return  (<img key={index+1} src={image} width="300" height="300" />)
                    })}
                    </Carousel>
                </div>
            </div>
            
            

    </div>
    )
}

export default Works
