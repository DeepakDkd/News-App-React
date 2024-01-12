import React from 'react'
import { NavLink } from 'react-router-dom'

function NavbarPC({navItems}) {
  return (
    <nav className='navPC'>
        <ul>
          {navItems.map((item) => (
            <li key={item.slug} >
              <NavLink
                to={`${item.slug}`}
                className={({ isActive }) => (
                  isActive ? 'activeNav' : ""
                )}>{item.name}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
  )
}

export default NavbarPC