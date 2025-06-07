import React from 'react'

const Heading = ({title,head,className}) => {
  return (
      <div {...(className ? { className } : {})}>
          <span>{title}</span>
          <h2>{head}</h2>
      </div>
  );
}

export default Heading