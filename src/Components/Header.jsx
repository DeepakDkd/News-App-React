import React from 'react'
import { NavLink } from 'react-router-dom'

function Header() {
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
    <header>
      <div className="logo">
        <NavLink to="/">
          <h1>Quick</h1>
          {/* <img src="https://png.pngtree.com/png-vector/20220821/ourmid/pngtree-speed-arrow-fast-quick-icon-logo-design-png-image_6119232.png" alt="" /> */}
        </NavLink>
      </div>
      <nav>
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
    </header>
  )
}

export default Header