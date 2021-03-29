import React from 'react';

const Alert = ({msg, style}) => {
  return (
    <div className="msg-banner-wrap msg-failed" style={style}>
      <div className="text-block">{msg}</div>
    </div>
  );
};
export default Alert;
