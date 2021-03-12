import React from 'react'

const Slider = ({styleName,children}) => {
    return (
        <div
            data-delay="4000"
            data-animation="cross"
            data-autoplay="1"
            data-autoplay-limit="120000"
            data-duration="400"
            data-infinite="1"
            className={styleName}
          >
            {children}
          </div>
    )
}

export default Slider;
