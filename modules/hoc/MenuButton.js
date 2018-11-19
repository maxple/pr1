import React, { Component } from 'react'

const MenuButton = ({ children, collapsed, txt, expandCollapse }) =>
  <div>
    <button onClick={expandCollapse}>{txt}</button>
    {!collapsed
      ? <div>
        {children}
      </div>
      : ''}
  </div>

export default MenuButton
