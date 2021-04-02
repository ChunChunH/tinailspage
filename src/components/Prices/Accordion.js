import React, {useState} from 'react'
import {useSpring, animated} from 'react-spring'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronDown, faChevronUp } from '@fortawesome/free-solid-svg-icons'

const Accordion = ({title, content}) => {

    const [isOpen, setIsOpen] = useState(false);

    return (
        <div>
    
            <button className ="title-accordion d-flex align-items-center justify-content-between" onClick={() => setIsOpen(!isOpen)}>
                {title}
                <div className="icon-accordion">
                    <FontAwesomeIcon icon={isOpen ? faChevronUp : faChevronDown} />
                </div>
            </button>
                <div className={`content-container justify-content-start ${isOpen ? "opened" : ''}`}>
            
                        {content}
                    
                </div>

        </div>
    )
}

export default Accordion
