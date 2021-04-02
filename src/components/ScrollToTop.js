import React, { useState } from 'react'
import { Link } from "react-scroll";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronUp } from '@fortawesome/free-solid-svg-icons'

const ScrollToTop = () => {

    const [scroll, setScroll] = useState(false)

    window.onscroll = function() {scrollFunction()};

    function scrollFunction() {
        if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
          setScroll(true)
        } else {
          setScroll(false)
        }
    }
  
    return (
            <Link smooth={true} to="header" className={scroll ? "myBtn" : ""}>
                <FontAwesomeIcon icon={faChevronUp}/>
            </Link>
    )
}

export default ScrollToTop
