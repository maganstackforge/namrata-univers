import { useState } from 'react'
import { navMenu } from '../data/navData'
import { Link } from 'react-router-dom'

export default function DesktopNav() {
  const [openDropdown, setOpenDropdown] = useState(null)

  return (
    <nav className='hidden md:flex relative'>
      {navMenu.map((menu, i) => (
        <div
          key={i}
          className='relative group'
          onMouseEnter={() => setOpenDropdown(i)}
          onMouseLeave={() => setOpenDropdown(null)}
        >
          {/* Main menu item */}
          <Link
            to={menu.href}
            className='py-6 hover:h-full md:px-4 transition-colors duration-200 group hover:bg-[#E3F0F4]
              active:bg-[#D7E9EE]'
          >
            {menu.label}
          </Link>

          {/* Dropdown menu (only if submenu exists) */}
          {menu.submenu && openDropdown === i && (
            <div className='absolute left-0 top-12.25 w-48 bg-[#F2F8FA] shadow-lg z-50'>
              {menu.submenu.map((sub, j) => (
                <Link key={j} to={sub.href} className='block px-4 py-1 hover:bg-[#E3F0F4]'>
                  {sub.label}
                </Link>
              ))}
            </div>
          )}
        </div>
      ))}
    </nav>
  )
}
