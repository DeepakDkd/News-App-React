import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import NavbarPC from './NavbarPC';
import Navbar from './Navbar'

function Header() {
  const [menu, setMenu] = useState(false)

  const navItems = [
    {
      name: "Home",
      slug: "/"
    },
    {
      name: "Science",
      slug: "/science"
    },
    {
      name: "Health",
      slug: "/health"
    },
    {
      name: "Sports",
      slug: "/sports"
    },
    {
      name: "Politics",
      slug: "/politics"
    },
    {
      name: "Technology",
      slug: "/technology"
    },
    {
      name: "Entertainment",
      slug: "/entertainment"
    }
  ];


  return (

    <>
      <header>
        <div className="logo">
          <NavLink to="/">
            <h1>Quick</h1>
            {/* <img src="https://png.pngtree.com/png-vector/20220821/ourmid/pngtree-speed-arrow-fast-quick-icon-logo-design-png-image_6119232.png" alt="" /> */}
          </NavLink>
        </div>
        <NavbarPC navItems={navItems} />

      <i className={!menu ? "ri-menu-fill" : "ri-menu-4-fill"} onClick={() => setMenu((prev) => (!prev))}></i>
      </header>
      {
        menu ? (

          <Navbar navItems={navItems} setMenu={setMenu} />
        ) : null
      }

    </>
  )
}

export default Header