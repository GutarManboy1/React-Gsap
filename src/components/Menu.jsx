import React from 'react'

const Menu = () => {
  return (
    <section id='menu' aria-labelledby='menu-heading'>
        <img src="/images/slider-left-leaf.png" alt="left-leaf" id='m-left-leaf'/>
        <img src="/images/slider-right-leaf.png" alt="right-leaf" id='m-right-leaf'/>

        <h2 className='sr-only' id='menu-heading'>
            Cocktail Menu
        </h2>
    </section>
  )
}

export default Menu