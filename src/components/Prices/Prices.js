import React from 'react'
import Accordion from "./Accordion"

const Prices = () => {
    return (
        <div className="container-fluid">
            <div className="row justify-content-center">
                <div className="col-12 text-center">
                    <div className="text mt-5">Precios y Promos</div>
                </div>
                <div className="col-6 mb-5">
                    <Accordion
                        title="Esmaltado Semipermanente"
                        content={<ul>
                                    <li>Color + 2 diseños por mano o pie - $500</li>
                                    <li>Color + 1 diseños por mano o pie - $450</li>
                                    <li>Sin diseños (sólo color) - $400</li>
                                    <li>Retirado de esmaltado semipermanente (si te volvés a pintar el retirado no se cobra)  - $200</li>
                                </ul>}
                    />
                    <Accordion
                        title="Esculpidas"
                        content={<ul>
                                    <li>Esculpidas con acrílico - $1000</li>
                                    <li>Retoque Esculpidas - $600 (Si hay que reconstruir algunas uñas son $80 por uña)</li>
                                    <li>Retirado Esculpidas - $350</li>
                                </ul>}
                    />
                    <Accordion
                        title="Kapping"
                        content={<ul>
                                    <li>Kapping con acrílico - $650</li>
                                    <li>Retoque Kapping - $300 (Si hay que reconstruir algunas uñas son $50 por uña)</li>
                                    <li>Retirado Kapping - $350</li>
                                </ul>}
                    />
                    <Accordion
                        title="Promos"
                        content={<ul>
                                    <li>Regalo de Bienvenida - Si venis por primera vez a Tinails te llevas de regalo un cupón de descuento para tu próximo turno</li>
                                    <li>Promo Amigas - Viniendo acompañada van a tener un 15% de descuento cada una (Promo válida sólo en esmaltado semipermanente en manos)</li>
                                    <li>Haciendote semis en manos y pies tenés un 10% de descuento</li>
                                    <li>Los descuentos no son acumulables!</li>
                                </ul>}
                    />
                </div>
            </div>    
        </div>
        
    )
}

export default Prices
