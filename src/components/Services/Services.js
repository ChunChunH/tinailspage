import React from 'react'
import basica from "../../assets/basica.jpg"
import semi from "../../assets/esmaltadosemi.jpg"
import esculpidas from "../../assets/esculpidas.jpg"
import kapping from "../../assets/kapping.jpg"
import Service from './Service';

const Services = () => {
    return (
        <div className="container-fluid">
            <div className="row">
                <div className="col-12 text-center">
                    <div className="text mt-5">Servicios</div>
                </div>
            </div>
            <div className="row justify-content-around">
                <Service
                    src={basica}
                    servicetext="Manicuria Básica"
                    explanation="La manicura básica se podría decir que es la base de todas las manicuras. El proceso comienza con la eliminación de restos de esmalte viejo con un quitaesmalte. Después se cortan las uñas y se le dan forma con una lima."
                />
                <Service
                    src={semi}
                    servicetext="Esmaltado Semipermanente"
                    explanation="Un esmalte semipermanente es un tipo de manicura que se hace cada 2-3 semanas; a diferencia de los esmaltes clásicos, la estilización semipermenente no requiere que se la quite y ponga de nuevo con tanta frecuencia, todo eso gracias a su durabilidad."
                />
            </div>
            <div className="row justify-content-around mb-5">
                <Service
                    src={esculpidas}
                    servicetext="Esculpidas"
                    explanation="Las uñas esculpidas son extensiones que se construyen a partir de la uña natural con material acrílico o gel. Estas permiten restaurar y reconstruir uñas mordidas o simplemente, lucir uñas más largas. Algo que las hace sumamente atractivas, ya que se puede moldear la forma y longitud para obtener varios estilos."
                />
                <Service
                    src={kapping}
                    servicetext="Kapping"
                    explanation="Consiste en poner una capa de acrílico o gel sobre la uña, sin alterar su largo, pero ayudando a que esta no se quiebre. La idea es hacer un baño muy fino, tratando de no engrosar la uña, y que sea liviano para la persona."
                />
            </div>
        </div>
    )
}

export default Services
