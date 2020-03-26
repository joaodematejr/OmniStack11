import React from 'react';

export default  function Header({title}) {
  return(
    <header>
      {/* OR props.children */}
      <h1>{title}</h1>
    </header>
  )
}
