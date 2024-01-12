import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import SearchPage from './SearchPage'

function NavbarPC({ navItems,setMenu }) {

    return (
        <>
            
                <nav className='navMobile'>
                    
                    <ul>
                        <SearchPage />
                        {navItems.map((item) => (
                            <li onClick={() => setMenu(false)}  key={item.slug} >
                                <NavLink
                                    to={`${item.slug}`}
                                   >{item.name}
                                </NavLink>
                            </li>
                        ))}
                    </ul>
                </nav>
            

        </>
    )
}

export default NavbarPC