import React from 'react';

const Slide = ({ styleName, image }) => {
  return (
    <div className={styleName} style={{ backgroundImage: `url(${image})` }}></div>
  );
};
export default Slide;
