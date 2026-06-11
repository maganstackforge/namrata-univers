import { useState } from 'react'
import { navMenu } from '../data/navData'
import { Link } from 'react-router-dom'

export default function DesktopNav() {
  const [openDropdown, setOpenDropdown] = useState(null)

  return (
    <nav className='hidden md:flex text-white relative'>
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
            className='p-8 hover:h-full md:px-4 transition-colors duration-200 hover:bg-[#37778F]'
          >
            {menu.label}
          </Link>

          {/* Dropdown menu (only if submenu exists) */}
          {menu.submenu && openDropdown === i && (
            <div className='absolute left-0 top-13.5 w-48 bg-[#4F7C8A] shadow-lg z-50'>
              {menu.submenu.map((sub, j) => (
                <Link key={j} to={sub.href} className='block px-4 py-1 hover:bg-[#2F5D6A]'>
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
